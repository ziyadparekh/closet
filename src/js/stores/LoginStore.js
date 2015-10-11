"use strict";

var endpoints = require('lib/endpoints');
var Store = require('stores/Store');
var UserModel = require("models/UserModel");
var LoginStore;

LoginStore = Store.extend({
  initialize: function (options) {
    this.options = options || {};
    this.model = new UserModel();
    this.setDefaultState();
  },
  actions: {
    "loginUser": "loginUser"
  },
  setDefaultState: function () {
    this._state = {
      isRequested: false,
      failedAttempt: false
    };
  },
  getState: function () {
    return this._state;
  },
  _getLoginOpts: function (value) {
    return {
      url: endpoints.login(),
      method: "POST",
      data: value
    }
  },
  _handleSuccess: function (response) {
    if (response && response.redirect) {
      window.location = response.redirect;
    }
  },
  _handleFail: function (err) {
    this._state.failedAttempt = true;
  },
  _handleAlways: function () {
    this._state.isRequested = false;
    this.trigger("change");
  },
  loginUser: function (payload) {
    this._state.isRequested = true;
    this.model
      .fetch(this._getLoginOpts(payload.value))
      .success(this._handleSuccess.bind(this))
      .fail(this._handleFail.bind(this))
      .always(this._handleAlways.bind(this));
  }
});

module.exports = LoginStore;