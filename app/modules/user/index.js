/* You'll need to import all 3 controllers and the service */
import angular from "angular";

import config from "./config.js";

import loginController from "./controllers/login.js";
import profileController from "./controllers/profile.js";
import registerController from "./controllers/register.js";

import service from "./service.js";

let user = angular.module('tiy.user', [])

user.config(config)

user.controller("ProfileController", profileController);
user.controller("LoginController", loginController);
user.controller("RegisterController", registerController);


user.service("UserService", service);

export default user;
