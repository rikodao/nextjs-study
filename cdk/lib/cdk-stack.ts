import * as cdk from 'aws-cdk-lib';
import {
  aws_sqs as sqs,
  aws_s3 as s3,
  aws_ecs as ecs,
  aws_ec2 as ec2,
  aws_elasticloadbalancingv2 as elbv2,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource

    const vpc = new ec2.Vpc(this, 'Vpc', {
      cidr: '10.0.0.0/16',
    });

    const lb = new elbv2.ApplicationLoadBalancer(this, 'LB', { vpc, internetFacing: true });
    const listener = lb.addListener('Listener', { port: 80 });

    const cluster = new ecs.Cluster(this, 'App', {
      clusterName: "myapp",
      vpc: vpc,
      containerInsights: true,
      enableFargateCapacityProviders: true,
    })

    const taskDefinition = new ecs.FargateTaskDefinition(this, 'TaskDef');

    taskDefinition.addContainer('web', {
      image: ecs.ContainerImage.fromRegistry('nginx'),
      
    }).addPortMappings({containerPort:80});
    

    const service = new ecs.FargateService(this, 'Service', { cluster, taskDefinition });
    service.registerLoadBalancerTargets(
      {
        containerName: 'web',
        containerPort: 80,
        newTargetGroupId: 'ECS',
        listener: ecs.ListenerConfig.applicationListener(listener, {
          protocol: elbv2.ApplicationProtocol.HTTPS
        }),
      })
   }

}
