const Joi = require('joi');

const schema = Joi.object({
    
    id: Joi.number().integer().optional(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    role: Joi.string().required()//default user
    
});


module.exports = schema; 