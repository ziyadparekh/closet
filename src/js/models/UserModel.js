"use strict";

var Backbone = require('lib/ZPBackbone');
var UserModel;

UserModel = Backbone.Model.extend({
  url: function () {
    return "http://localhost:3020/api/login"
  },
  parse: function (data) {
    data = data || {};
    return data.user;
  }
});

module.exports = UserModel;