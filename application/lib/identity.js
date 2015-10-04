"use strict";

var request = require('request-promise');
var endpoints = require('../lib/endpoints');
var _ = require("underscore");
var Identity = {};

var requestOptions = {
  json: true
};

Identity.loginUser = function (req, res, next) {
  var body = { email: req.body.email, password: req.body.password };
  var opts = _.extend({}, requestOptions, {
    url: endpoints.login(),
    method: "POST",
    body: body
  });
  request(opts)
    .then(function (response) {
      req.session.user = response;
      next();
    }).catch(function (err) {
      return res.status(403).json({message: err}).end();
    });
};

module.exports = Identity;