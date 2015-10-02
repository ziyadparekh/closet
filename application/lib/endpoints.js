"use strict";

var identity_service = "http://localhost:3020/api";

var uriJoin = function () {
  var args = [].slice.apply(arguments);
  return args.join("/");
};

exports.login = function () {
  return uriJoin(identity_service, "user", "login");
};

exports.signup = function () {
  return uriJoin(identity_service, "user", "signup");
};