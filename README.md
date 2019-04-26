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
./judy-client
├── build
├── config
├── src
│   ├── assets
│   ├── components
│   │   ├── restaurant
│   │   └── users
│   ├── router
│   │   ├── guest
│   │   └── staff
│   ├── services
│   └── store
└── static

Overview


Build
Contains utility code to build the application, and run the application in different modes (dev and prod). it contains also webpack configurations


Config
Contains the configuration files of the application.


Src
This directory is the core of the application, all the logic is implemented within this folder.
assets: Contains images, css and js files
components: Contains the different components. Every module has it own directory, for example restaurant module has a directory restaurant which contains it components.
Naming rule (pascal case): NameOfTheComponent.vue
<template>
    <h1 @click='doAction()'>{{ obj }}</h1>    
</template>
<script>
  	export default {
      	name: 'NameOfTheComponent',
      	data() {
  		return  {
      		obj: 'somthing'
  		},
  		computed: {
  		},
  		methods: {
      		doAction() {
          		console.log('hello world')
      		},
  		},
  		mounted() {
      		//some logic to do whene the component is accessed
  		}
  	}
  }
</script>
<style scoped>
</style>


router: Contains the routes for client side application; like the server side, this folder has two subdirectories: guest and staff.
The routes files inside each folder has the followning naming rule

filename.(staff or guest).routes.js

and the routes inside the file are going to be accessed as below:

/staff or guest/filename/route_inside_the_file

Examlple :
restaurant.guest.routes.js
import PlateForm from  '@/components/restaurant/PlateForm'
export  default  new Array (
{
    path: '/plate',
    name: 'plate',
    component: PlateForm
})
PS: The routes are auto-imported, you have to focus only on creating your routes
services: Contains all the backend-call implementation using axios api.
Api.js contains the baseURI and Authentication header, so you don't need to add the token by yourself!
the file naming rule: name_of_module.js
Example:
User.js
import Api from  "@/services/Api"

export  default {
    register(credentials) {
	    return  Api().post('users/register', credentials)
    },
    login(credentials) {
	    return  Api().post('users/login', credentials)
    }
}
store: Contains store.js which holds token, user object and some other information

static
files in static/ are not processed by Webpack at all: they are directly copied to their final destination as-is, with the same filename. You must reference these files using absolute paths, which is determined by joining build.assetsPublicPath and build.assetsSubDirectory in config.js



Conclusion
Vue is very beautiful and so is node js and express.
