const Joi = require('joi');

const schema = Joi.object({
    
    id: Joi.number().integer().optional(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
<<<<<<< HEAD
    // role: Joi.string().required()//default user
    //token: [Joi.string(),Joi.number()]

=======
    role: Joi.string().required()//default user
    
>>>>>>> 98d5321e70aedd3b93449ae764fe094268b8b27c
});


module.exports = schema; 