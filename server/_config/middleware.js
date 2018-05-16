const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const passport = require('passport');

module.exports = function(server) {
  server.use(helmet());
  server.use(morgan('dev'));
  server.use(express.json());
  server.use(cors());
  server.use(passport.initialize());
};
