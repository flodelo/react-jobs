const { request, response } = require('express');
const express = require('express');
const router = express.Router();
const jobController = require('./controllers/jobController');
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



router.use((request, response) => response.status(404).json(`Endpoint ${request.url} not found`))

module.exports = router;