"use strict";

var Store = require('stores/Store');
var UserModel = require("models/UserModel");
var LoginStore;

LoginStore = Store.extend({
  initialize: function (options) {
    this.options = options || {};
    this.model = new UserModel();
  }
});

module.exports = LoginStore;