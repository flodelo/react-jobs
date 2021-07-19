const Job = require('../models/job');

const jobController = {
    findAll: async (_, response) => {
        try {
            const jobs = await Job.findAll();
            response.json(jobs);
        } catch(error) {
            response.status(500).send(error.message);
        }
    },
}

module.exports = jobController;