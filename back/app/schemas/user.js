const Joi = require('joi');

const schema = Joi.object({
    
    id: Joi.number().integer().optional(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    role: Joi.string().default('user')
    //token: [Joi.string(),Joi.number()
});


module.exports = schema; 