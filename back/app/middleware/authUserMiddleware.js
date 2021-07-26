const jwt = require('jsonwebtoken');

require('dotenv').config();

module.exports = function (request, response, next) {

    try {

        const token = request.header("Authorization");

        
            if (!token) {
            response.status(403).json("Acces User denied");
            }
            const verify = jwt.verify(token, process.env.TOKEN_KEY);
            request.user = verify;

            next();

    }   catch (error) {
            console.error(error);
            response.status(403).json("Token invalid");

    }

}