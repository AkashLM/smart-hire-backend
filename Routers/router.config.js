const express = require("express");
const Router1 = express.Router();
const Router2 = express.Router();
const Router3 = express.Router();
const Router4 = express.Router();
const Router5 = express.Router();
const {
  TokenGenerator_Middleware,
} = require("../Authentication/TokenGenerator.middleware");
const {
  AuthenticationMiddleware,
} = require("../Authentication/Auth.Middleware");
const { LoginFunction } = require("../Controllers/Common_Controller/Login");
const { SignUpFunction } = require("../Controllers/Common_Controller/SignUp");
const {
  Add_Candidate_Result_Function,
} = require("../Controllers/Other_Controller/Add_Candidate_Result");
//Percentage Calculator
const {
  Percentage_Calculator_Function,
} = require("../Controllers/Other_Controller/PercentageCounter");
const {
  Add_New_Interview,
} = require("../Controllers/Other_Controller/Add_New_Interview");
Router1.route("/").post(LoginFunction, TokenGenerator_Middleware);
Router2.route("/").post(SignUpFunction, TokenGenerator_Middleware);
Router3.route("/").post(
  AuthenticationMiddleware,
  Percentage_Calculator_Function
);
Router4.route("/").post(AuthenticationMiddleware, Add_New_Interview);
Router5.route("/").post(
  AuthenticationMiddleware,
  Add_Candidate_Result_Function
);

module.exports = {
  Router1,
  Router2,
  Router3,
  Router4,
  Router5,
};
