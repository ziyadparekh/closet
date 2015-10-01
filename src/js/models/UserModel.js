"use strict";

var Backbone = require('lib/ZPBackbone');
var endpoints = require('lib/endpoints');
var UserModel;

UserModel = Backbone.Model.extend({
  url: function () {
    return endpoints.login();
  },
  parse: function (data) {
    data = data || {};
    return data.user;
  }
});

module.exports = UserModel;