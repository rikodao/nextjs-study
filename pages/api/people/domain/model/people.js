export default class People {
    id
    name
    height
    mass
    hair_color
    skin_color
    eye_color
    gender
    constructor(data){
        this.validate(data)
        this.id = data.id
        this.name = data.name
        this.height = data.height
        this.mass = data.mass
        this.hair_color = data.hair_color
        this.skin_color = data.skin_color
        this.eye_color = data.eye_color
        this.gender = data.gender    
    }
    validate(data) {
        if (
                data.id&&data.name &&
                data.height&&
                data.mass&&
                data.hair_color&&
                data.skin_color&&
                data.eye_color&&
                data.gender    
            ) return
            throw new Error('Missing required fields')
    }


}