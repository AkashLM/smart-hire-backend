const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const path = require("path");
// const __dirname = path.resolve();

//Setting Up CORS Policy
var corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};
app.options("*", cors()); // preFlight
app.use("*", cors(corsOptions), function (req, res, next) {
  next();
});

const { Router1,Router2,Router3 } = require("./Routers/router.config");

//Body Parsing Configuration
app.use(express.json());
//Cookie Parsing Configuration
app.use(cookieParser());

//Environmental file Configuration
dotenv.config({
  path: "./.env",
});

const { PORT } = process.env;
try {
  //Working API

  //Error Handling Middleware

  app.use((Error, req, res, next) => {
    res.status(500).json({
      status: "System Error",
      message: "Unable to fetch your request",
      Error: Error,
    });
    console.log("nnnnnnnnn--->", Error);
  });
} catch (Error) {
  console.log("Weeeeee", Error);
}

//
app.use('/api/v1/login', Router1);
app.use('/api/v1/SignUp', Router2);
app.use('/api/v1/CalculateResult', Router3);


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "..", "client", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
  });
}
//
app.listen(PORT, (Error) => {
  console.log(`Application listening on PORT ${PORT}`);
});
