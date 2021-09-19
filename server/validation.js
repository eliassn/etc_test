const joi = require('@hapi/joi')

const validation = (data)=>{
    const schema = joi.object({
        nom:joi.string(),
        prenom:joi.string(),
        profileimage:joi.string(),
        email:joi.string().email(),

    })
    return schema.validate(data)
}
module.exports = validation