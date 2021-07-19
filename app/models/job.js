const database = require('../database');

class JobError extends Error {
    constructor(id) {
        super(`No Job found with id ${id}`);
    }
};


/**
* @typedef Job
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

class Job {

    // we're referencing the custom error as static property of the model 
    //to test the class of an error in the controller without having to 
    //import the class of the error
    
    static JobError = JobError;

    constructor(data={}) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }

   /**
     * Retrieves all jobs from database
     * @static
     * @async
     * @returns {Array<Job>} all jobs in database
     * @throws {Error} an error object
     */
    static async findAll() {
        try {
            const {rows} = await database.query('SELECT * FROM job');
            return rows.map(row => new Job(row));
        } catch (error) {
            if (error.detail) {
                throw new Error(error.detail);
            } else {
                throw error;
            }
        }
    }
};

module.exports = Job;