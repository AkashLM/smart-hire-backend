const express = require('express');
const Router1 = express.Router();
const Router2 = express.Router();
const { TokenGenerator_Middleware } = require('../Authentication/TokenGenerator.middleware');
const { LoginFunction } = require('../Controllers/Common_Controller/Login');
const { SignUpFunction } = require('../Controllers/Common_Controller/SignUp');

Router1.route('/').post(LoginFunction, TokenGenerator_Middleware);
Router2.route('/').post(SignUpFunction, TokenGenerator_Middleware);


module.exports = {
	Router1,Router2,
};
