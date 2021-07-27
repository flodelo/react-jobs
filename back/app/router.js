const { Router } = require('express');

const jobController = require('./controllers/jobController');
const userController = require('./controllers/userController');
const poleemploiController = require('./controllers/poleemploiController');


const Job = require('./models/job');
const User = require('./models/user');

const jobSchema = require('./schemas/job');
const userSchema = require('./schemas/user');
const { validateBody } = require('./services/validator');
const authorizationUser = require('./middleware/authUserMiddleware');
const authorizationAdmin = require('../app/middleware/authAdminMiddleware');



const router = Router();

/**
* Test route
* @route GET /hello
* @group Jobboard
* @returns {string} 200 - 'Hello World!' if test is successful
*/
router.get('/hello', (request, response) => response.json('Hello World!'));


// ROUTES RELATED TO JOB

/**
* Responds with all jobs in database
* @route GET /jobs
* @group Jobboard
* @returns {Array<Jobs>} 200 - An array of jobs
* @returns {string} 500 - An error message
*/
router.get('/jobs', jobController.findAllJobs);

/**
* Responds with one job in database
* @route GET /job/{id}
* @group Jobboard
* @param {number} id.path.required The id of the job to fetch
* @returns {Job.model} 200 - A single job identified by its id
* @returns {string} 404 - An error message
* @returns {string} 500 - An error message
*/
router.get('/job/:id(\\d+)', jobController.findOneJob);

/**
* @typedef JobPost
* @property {number} id
* @property {string} title
* @property {string} description
* @property {string} company
* @property {string} technology
* @property {string} locality
* @property {string} contract
* @property {string} salary
* @property {number} user_id
*/

/**
* Adds a new job in database
* @route POST /jobs/save
* @group Jobboard
* @param {JobPost.model} object.body.required Job object to add to database
* @returns {Job.model} 201 - The newly created job
* @returns {string} 500 - An error message
*/
router.post('/job/save', /*authorizationAdmin*/validateBody(jobSchema), jobController.addJob);

/**
* Updates a job in database
* @route PATCH /jobs/update
* @group Jobboard
* @param {Job.model} object.body.required Job object to update in database
* @returns {*} 204 - Job has been updated
* @returns {string} 500 - An error message
*/
router.patch('/job/update',/* authorizationAdmin,*/ validateBody(jobSchema), jobController.addJob);

/**
* Finds and deletes a job in database
* @route DELETE /job/delete/{id}
* @group Jobboard
* @param {number} id.path.required The id of the job to delete
* @returns {*} 204 - Job has been deleted
* @returns {string} 404 - An error message
* @returns {string} 500 - An error message
*/
router.delete('/job/delete/:id(\\d+)', /*authorizationAdmin,*/ jobController.deleteJob);


//ROUTES RELATED TO USER

/**
* Responds with all users in database if Admin
* @route GET /users
* @group Jobboard
* @returns {Array<User>} 200 - An array of users
* @returns {string} 500 - An error message
*/
router.get('/users',  authorizationAdmin, userController.getAllUser);

/**
* Responds with one user in database
* @route GET /user/{id}
* @group Jobboard
* @param {number} id.path.required The id of the user to fetch
* @returns {User.model} 200 - One user identified by his/her id
* @returns {string} 404 - An error message
* @returns {string} 500 - An error message
*/
router.get('/user/:id(\\d+)', authorizationAdmin, userController.getOneUser);

/**
* @typedef UserPost
* @property {number} id
* @property {string} firstName
* @property {string} lastName
* @property {string} email
* @property {string} password
* @property {string} role
*/

/**
* Adds a new user in database
* @route POST /user/register
* @group Jobboard
* @param {UserPost.model} object.body.required User object to add to database
* @returns {User.model} 201 - The newly created user
* @returns {string} 500 - An error message
*/
router.post('/user/registerUser', /*authorizationUser,*/ validateBody(userSchema), userController.isRegister);

// SE RAJOUTER UN COMPTE ADMIN NOUS-MEME VIA LE FORMULAIRE DE LOGIN
/**
* Adds a new Admin in database
* @route POST /user/register
* @group Jobboard
* @param {UserPost.model} object.body.required User object to add to database
* @returns {User.model} 201 - The newly created Admin* @returns {String} 500 - An error message
*/
router.post('/user/registerAdmin', /*authorizationAdmin,*/ validateBody(userSchema), userController.isRegister);


/**
* Connect a  user in database
* @route POST /user/login
* @group Jobboard
* @param {UserPost.model} object.body.required User object to connect to database
* @returns {Job.model} 201 - The newly connected user
* @returns {string} 500 - An error message
*/
router.post('/user/loginUser', /*authorizationUser,*/ validateBody(userSchema), userController.isLogin);

/**
* Connect an ADMIN in database
* @route POST /user/login
* @group Jobboard
* @param {UserPost.model} object.body.required User object to connect to database
* @returns {User.model} 201 - The newly connected Admin
* @returns {string} 500 - An error message
*/
router.post('/user/loginUser', /*authorizationAdmin,*/ validateBody(userSchema), userController.isLogin);

/**
* Updates a user in database
* @route PATCH /users/update
* @group Jobboard
* @param {User.model} object.body.required User object to update in database
* @returns {*} 204 - User has been updated
* @returns {string} 500 - An error message
*/
router.patch('/users/update', authorizationUser, validateBody(userSchema), userController.addUser);
// SI BESOIN DE RAJOUTER UNE ROUTE POUR LES ADMIN pour modifier les info user
router.patch('/users/update', authorizationAdmin, validateBody(userSchema), userController.addUser);

/**
* Finds and deletes a user in database
* @route DELETE /user/delete/{id}
* @group Jobboard
* @param {number} id.path.required The id of the job to delete
* @returns {*} 204 - User has been deleted
* @returns {string} 404 - An error message
* @returns {string} 500 - An error message
*/
router.delete('/user/delete/:id(\\d+)', authorizationUser, userController.deleteOneUser);

// SI BESOIN D'ETRE UN ADMIN POUR SUPPRIMER UN PROFIL Utilisateur lambda
/**
* Finds and deletes a user in database
* @route DELETE /user/delete/{id}
* @group Jobboard
* @param {number} id.path.required The id of the job to delete
* @returns {*} 204 - User has been deleted
* @returns {string} 404 - An error message
* @returns {string} 500 - An error message
*/
router.delete('/user/delete/:id(\\d+)', authorizationAdmin, userController.deleteOneUser);


// ROUTE TO FETCH POLE EMPLOI DATA

/**
* Responds with jobs from API Pôle Emploi
* @name /jobs/pe
* @group Jobboard
* @route GET 
* @returns {Array<Jobs>} 200 - An array of jobs
* @returns {string} 500 - An error message
* @route POST 
* @returns {Array<Jobs>} 200 - An array of jobs
* @returns {string} 500 - An error message
*/
router.route('/jobs/pe/')
       .get(poleemploiController.fetchJobs)
       .post(poleemploiController.fetchJobs);

router.use((request, response) => response.status(404).json(`Endpoint ${request.url} not found`))

module.exports = router;





// un router pour les visiteurs connectées


// un router pour les admins













