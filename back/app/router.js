const { request, response } = require('express');
const express = require('express');
const router = express.Router();
const jobController = require('./controllers/jobController');
const Job = require('./models/job');
// const userController = require('./controllers/userController');


/**
 * Test route
 * @route GET /hello
 * @group Jobboard
 * @returns {string} 200 - 'Hello World!' if test is successful
 */
router.get('/hello', (request, response) => response.json('Hello World!'));

/**
 * Responds with all jobs in database
 * @route GET /jobs
 * @group Jobboard
 * @returns {Array<Jobs>} 200 - An array of jobs
 * @returns {string} 500 - An error message
 */
router.get('/jobs', jobController.findAll);

/**
* Responds with one job from database
* @route GET /job/{id}
* @group Jobboard
* @param {number} id.path.required The id of the job to fetch
* @returns {Job.model} 200 - A single job identified by its id
* @returns {string} 404 - An error message
* @returns {string} 500 - An error message
*/
router.get('/job/:id(\\d+)', jobController.findOne);


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
* @param {JobPost.model} object.body.required Job object to add in database
* @returns {Job.model} 201 - The newly created job
* @returns {string} 500 - An error message
*/
router.post('/jobs/save', /*validateBody(boardgameSchema),*/ jobController.save);


/**
* Adds an updated job in database
* @route PATCH /jobs/update
* @group Jobboard
* @param {Job.model} object.body.required Job object to update in database
* @returns {*} 204 - Job has been updated
* @returns {string} 500 - An SQL error message
*/
router.patch('/jobs/update', /*validateBody(boardgameSchema),*/ jobController.save);

router.use((request, response) => response.status(404).json(`Endpoint ${request.url} not found`))

module.exports = router;