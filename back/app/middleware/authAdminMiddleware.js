const jwt = require('jsonwebtoken');

require('dotenv').config();

module.exports = function (request, response, next) {
    console.log(request.headers)
    try {

        
        // Stock the token we recieved from the header authorization
        const token = request.headers.authorization.split(" ")[1];
        console.log(token);
        // Verify if the token is valid
        if (!token) {
            return response.status(403).json("Admin access denied");
        }
        // Verify if the token is valid
        const verify = jwt.verify(token, process.env.TOKEN_KEY);
        // Verify if the user is an Admin
        if (verify.isAdmin === false || verify.isAdmin === null ) {
            return response.status(401).json("You don't have access rights");
        }

        request.user = verify;

        next();

    } catch (error) {
        console.error(error);
            response.status(403).json("Token invalid");

    }
}