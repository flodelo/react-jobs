// // messages d'erreur reste à configurer, quelle donnée est-ce que cet API renvoie???
// const joobleController = {
    
//     fetchJobs: async (request, response) => {

//         const url = "https://fr.jooble.org/api/";
//         const key = "d97060be-d520-4a3c-ab05-7d8bb6363f84";
//         const params = "{ keywords: 'react', location: 'France' }"

//         //create xmlHttpRequest object
//         const http = new XMLHttpRequest();

//         //open connection. true - asynchronous, false - synchronous
//         http.open("POST", url + key, true);

//         //Send the proper header information
//         http.setRequestHeader("Content-type", "application/json");

//         //Callback when the state changes
//         http.onreadystatechange = function() {
//             if(http.readyState == 4 && http.status == 200) {
//                 alert(http.responseText);
//             }
//         }
//         //Send request to the server
//         http.send(params);
//     },

//     fetchOneJob: async (request, response) => {
//         const url = "https://fr.jooble.org/api/:id(\\d+)";
//         const key = "d97060be-d520-4a3c-ab05-7d8bb6363f84";
//         const params = request.params.id

//         //create xmlHttpRequest object
//         const http = new XMLHttpRequest();

//         //open connection. true - asynchronous, false - synchronous
//         http.open("POST", url + key, true);

//         //Send the proper header information
//         http.setRequestHeader("Content-type", "application/json");

//         //Callback when the state changes
//         http.onreadystatechange = function() {
//             if(http.readyState == 4 && http.status == 200) {
//                 alert(http.responseText);
//             }
//         }
//         //Send request to the server
//         http.send(params);
//     }

// }

// module.exports = joobleController;