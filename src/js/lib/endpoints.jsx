"use strict"

const identity_service = "http://localhost:3010/api";
const inventory_service = "http://localhost:3030/api";


var uriJoin = function (...args) {
  return args.join("/");
};

export function login() {
  return uriJoin(identity_service, "user", "login");
}

export function signup() {
  return uriJoin(identity_service, "user", "signup");
}