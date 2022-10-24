const express = require('express');
const app = express();
require("dotenv").config(); // gestion de variables de entorno

// view engine setup
app.use(express.json());
app.use(
    express.urlencoded({
      extended: true,
    })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
      "Access-Control-Allow-Headers",
      "Authorization",
      "X-API-KEY",
      "Origin",
      "X-Requested-With",
      "Content-Type, Accept",
      "Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

module.exports = app;
