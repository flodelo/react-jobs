const checkAdmin = (request, response, next) => {
    
    // If the user isn't connected, then we ask them to login
    
    if(!request.session.user) {
        return response.redirect("/login");
    }

    //if the user is connected
    // then we have to cheked their role (if admin or not)
    // 
    // si l'utilisateur est connecté
    // ALORS on vérifie que l'utilisateur est bien un admin
    if(request.session.user.role === "ADMIN" || "") {
        // si tout est OK on passe à la suite
        next();
    } else {
        return response.status(403).json("401");
    }


};

module.exports = checkAdmin;