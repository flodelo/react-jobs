require('dotenv').config();
const express = require('express');



const PORT = process.env.PORT || 1234;
const router = require('./app/router');

const app = express();

// dès qu'on veut utiliser une requète POST
app.use(express.json());

// pour décoder les méthodes POST
// on vient dire à express comment décoder les données envoyées en POST
app.use(express.urlencoded({
    extended: true,
}));

//notre route statique
app.use(express.static('public'));

//on oriente les route vers le router
app.use(router);

//notre serveur écoute sur le PORT
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});