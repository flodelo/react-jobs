require('dotenv').config();
const express = require('express');
// Managing Cross-origin ressource sharing with node.js package CORS
const cors = require('cors');

const PORT = process.env.PORT || 1234;
const app = express();
const router = require('./app/router');

// API documentation with Swagger 
//const expressSwagger = require('express-swagger-generator')(app);
//expressSwagger(swaggerConfig);
//const swaggerConfig = require('./app/middlewares/swagger.js');

// CORS-enabled for all origins
app.use(cors("*")); 
// app.use((request,response,next) => {
//   response.header('Access-Control-Allow-Origin', 'http://localhost:8080');
//   response.header("Access-Control-Allow-Headers", 'Content-Type, Accept, Authorization');
//   response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//   next();
// })

// All data sent as json in POST methods 
app.use(express.json());
// All, but POST route requesting access token to Pôle Emploi API, which is set to be in urlencoded
app.use(express.urlencoded({
    extended: true,
}));


// potential static route
//app.use(express.static('public'));

//app.use(authAdminMiddleware);

// Orientating all routes towards router
app.use(router);

// Server is listening on port as indicated in .env file
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
});