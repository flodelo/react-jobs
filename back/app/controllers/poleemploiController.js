const Job = require('../models/job');

require fetch = require('node-fetch');

const poleemploiController = {
    
    fetchOneJob: async (request, response) => {

        // const quelque chose = formattage data de l API à notre guise
        // + un model
        // response.json(quelque chose);

        const selectedJob = [];

        const reactJob = new Job().reactJob();

        for (const reactJob of request.params.reactJob) {

            const jobs = await fetch(`https:// urls de l'api`).then(response => response.json());

            // on ne veut que React
            const reactJobs = jobs.filter(j => new Category(j.category));

        }

        response.json(selectedJob);
    }
}

module.exports = poleemploiController;