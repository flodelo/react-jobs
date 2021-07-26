// const fetch = require('node-fetch');

// const monsterController = {
    
//     fetchJobs: async (request, response) => {

//         const urlToken = "https://api.jobs.com/auth/token?AppId=MyApp&AppSecret=abcdaxkld1235";
//         const headersToken = {
//             "Content-Type": "application/json",
//         }
//           const bodyToken = {
//             "AppID": "client_credentials",
//             "AppSecret": "PAR_jobboard_bbd66325e3c090fee72f14d54ccb6bc6fe98dd16eb100d9840ac47bb35c0adef",
//             "client_secret": "d1647f213cb969fc56821fddcfa8a37d2be16905d21495d8fcd2412391ecad8a",
//             "scope": "o2dsoffre PAR_jobboard_bbd66325e3c090fee72f14d54ccb6bc6fe98dd16eb100d9840ac47bb35c0adef api_offresdemploiv2"
//           }
          
//           fetch(urlToken, { method: 'POST', headers: headersToken, body: bodyToken})
//             .then((response) => {
//                return response.json()
//           })
//           .then((data) => {
//              // Do something with the returned data.
//             response.json(data);
//           });

//         const urlRequest = "https://api.emploi-store.fr/partenaire/offresdemploi/v2/offres/search?motsCles=react";
//         const headersRequest = {
//             'Authorization': data.token_type + ' ' + data.access_token,
//         }
//           return fetch(urlRequest, { method: 'GET', headers: headersRequest })
//           .then((response) => {
//               return response.json()
//           })
//           .then((data) => {
//         //    console.log(data);
//            setJobs(data);
//           })
//           .catch((error) => {
//             response.send(error,"something went wrong");
//         });
        

    
//     }
// }

// module.exports = monsterController;