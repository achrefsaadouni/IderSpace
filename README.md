IDERSPCAE

We are happy to create this git repo to collaborate in this project:
Iderspace the best academic network

Summary

Global architecture
Server side
Client side
How To run it


Global architecture
Our application is devided into two parts:
Server side : built with nodeJS and expressJS created with express generator with some modifications.
Client side: built with react-js 

Server side

Directory tree
./backend

├── controllers

├── Dictionnary

├── handler

├── middleware

├── models

├── routes

├── ScrappingLinkedIn

├── services

├── validation

├── conf.js

└── app.js

Walking through
Starting from the top -> down


controllers
Contains all the controllers which will be called by the routes

Dictionnary
Containes all types of developpement technologies,office programms,personal skills dictionnary so it can  retun the type of skill

handler
Contains the functions that allows user to store their photos in the cloud


controller_name.controller.js

middleware
Contains the authentication middlare to check if the user who requested the ressource is connected or not with his token

models
Contains all our models that we used in this project

routes
Contains the routes for cour application

exemple :
router.post("/", ChatbotController.chat);
module.exports = router;


ScrappingLinkedIn
Contains all the functions that allows our application to scrapp all the data from our users linkdin informations to build his user profil

services
Contains all the business functions of our application such as 

function getApprovedAnswer(comments) {
    for (var i = 0; i < comments.comments.length; i++) {
        if (comments.comments[i].approved == true)
        {
            return comments.comments[i];
        }
    }
}

validation
Contains all form validation functions of our application


Client side

Directory tree
./iderSpace

├── backend

├── logs

├── public

├── src

│   ├── validations

│   ├── components

│   ├── store
	
│   │	├── actions

│   │	├── reducers

│   │   └── store.js

│   ├── utils

│   └── App.js

└── server.js

Overview


backend
Contains the server side application


logs
Contains all the logs for the programmed  tasks


Src
This directory is the core of the application, all the logic is implemented within this folder.


public: Contains images, css and js files

components: Contains the different components. Every module has it own directory, for example chatbot module has a directory chatbot which contains it components.



utils: Contains function that will intercept all request and add the token to their headers

exemple :
const setAuthToken = token => {
  if (token) {
    // Apply to every request
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};




validation :
Contains a function that can check if a string is empty or not

server.js
Contains the configuration of the server

How To run it
run " npm install " to get all dependencies
run " npm run dev " to start both servers


