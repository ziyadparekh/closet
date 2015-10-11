"use strict"

const identity_service = "http://localhost:3010";
const inventory_service = "http://localhost:3030/api";


var uriJoin = function (...args) {
  return args.join("/");
};

export function login() {
  return uriJoin(identity_service, "login");
}

export function signup() {
  return uriJoin(identity_service, "user", "signup");
}