const jwt = require('jsonwebtoken');


const SECRET_KEY_JWT = process.env.TOKEN_KEY;

module.exports = {


    createToken (userData) {

        let isAdmin = false;
        
        // method package jwt
        if (userData.role === "admin") {
            isAdmin = true;
        }
        return jwt.sign(

            { 
                userId: userData.id,
                isAdmin: isAdmin
            },
            SECRET_KEY_JWT, 
            {
                expiresIn: "2h"
            }
        )
    }
}