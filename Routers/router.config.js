const express = require('express');
const Router1 = express.Router();
const Router2 = express.Router();
const Router3 = express.Router();
const { TokenGenerator_Middleware } = require('../Authentication/TokenGenerator.middleware');
const { AuthenticationMiddleware } = require('../Authentication/Auth.Middleware');
const { LoginFunction } = require('../Controllers/Common_Controller/Login');
const { SignUpFunction } = require('../Controllers/Common_Controller/SignUp');
//Percentage Calculator
const {Percentage_Calculator_Function} = require("../Controllers/Other_Controller/PercentageCounter");
Router1.route('/').post(LoginFunction, TokenGenerator_Middleware);
Router2.route('/').post(SignUpFunction, TokenGenerator_Middleware);
Router3.route('/').post(AuthenticationMiddleware,Percentage_Calculator_Function);



module.exports = {
	Router1,Router2,Router3
};
