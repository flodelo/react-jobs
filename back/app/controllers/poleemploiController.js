// const Job = require('../models/job');

const fetch = require('node-fetch');

const poleemploiController = {
    
    fetchJobs: async (request, response) => {

        // // const quelque chose = formattage data de l API à notre guise
        // // + un model
        // // response.json(quelque chose);

        // const selectedJob = [];

        // const reactJob = new Job().reactJob();

        // for (const reactJob of request.params.reactJob) {

        //     const jobs = await fetch(`https:// urls de l'api`).then(response => response.json());

        //     // on ne veut que React
        //     const reactJobs = jobs.filter(j => new Category(j.category));

        // }

        // response.json(selectedJob);


        const urlToken = "https://entreprise.pole-emploi.fr/connexion/oauth2/access_token?realm=%2Fpartenaire";
        const headersToken = {
            "Content-Type": "application/x-www-form-urlencoded",
        }
        const bodyToken = {
            "grant-type": "client_credentials",
            "client_id": "PAR_jobboard_bbd66325e3c090fee72f14d54ccb6bc6fe98dd16eb100d9840ac47bb35c0adef",
            "client_secret": "d1647f213cb969fc56821fddcfa8a37d2be16905d21495d8fcd2412391ecad8a",
            "scope": "application_PAR_jobboard_bbd66325e3c090fee72f14d54ccb6bc6fe98dd16eb100d9840ac47bb35c0adef api_offresdemploiv2 o2dsoffre"
            // application_PAR_reactjobsfr_763dc663cbaaa6ef7f117a6e6721703e344c666059bd49fa33d841b4b1bc4fcf%20api_offresdemploiv2%20o2dsoffre
        }
          
          fetch(urlToken, { method: 'POST', headers: headersToken, body: bodyToken})
            .then((response) => {
               return response.json()
          })
          .then((data) => {
             // Do something with the returned data.
            response.json(data);
          });

        const urlRequest = "https://api.emploi-store.fr/partenaire/offresdemploi/v2/offres/search?motsCles=react";
        const headersRequest = {
            'Authorization': data.token_type + ' ' + data.access_token,
        }
          return fetch(urlRequest, { method: 'GET', headers: headersRequest })
          .then((response) => {
              return response.json()
          })
          .then((data) => {
           console.log(data);
        //    setJobs(data);
          })
          .catch((error) => {
            response.send(error,"something went wrong");
        });
    
    },

}

module.exports = poleemploiController;