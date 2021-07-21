const { User } = require("../models/user");

const userController = {

    findAll: async (_, response) => {
        try {
            
            const users = await User.findAll();
            //console.log(users);
            response.json(users);
        } catch(error) {
            response.status(500).send(error.message);
        }
    },

    login: async (request, response) => {
        try {
            const user = await User.findOne(parseInt(request.params.id, 10));
            response.json(user);
        } catch(error) {
            if (error instanceof User.UserError) {
                response.status(404).send(error.message);
            } else {
                response.status(500).send(error.message);
            }
        }
    },


};

module.exports = userController;