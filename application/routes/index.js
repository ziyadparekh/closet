'use strict';

var request = require('request-promise');
var endpoints = require('../lib/endpoints');
var _ = require('underscore');
var topnav = require('./configs/schema').topnav;

var requestOptions = {
  url: endpoints.login(),
  json: true,
  method: "POST"
};

var buildVars = function () {
    var js_vars = {
        title : '',
        user: '',
        navMenu: ''
    }
    return js_vars
};

exports.login = function(req, res){
    var js_vars = _.extend({}, buildVars(), {
        navMenu : topnav.navMenu,
        title: 'Welcome'
    });
    if (req.session && req.session.user) {
      // TODO: redirect to edit profile
      return res.status(200).json(req.session.user).end();
    }
    res.render('login', js_vars);
};

exports.loginUser = function (req, res) {
    res.status(200).json({redirect: "/home"}).end();
};

exports.testSession = function (req, res) {
  if (req.session.user) {
    res.status(200).json(req.session.user).end();
  } else {
    res.status(403).json({message: "you are not authorized to view this "});
  }
};

exports.index = function(req, res){
    var js_vars = _.extend({}, buildVars(), {
        navMenu : topnav.navMenu,
        title: 'Welcome'
    });
    if (req.session && req.session.user) {
      js_vars.user = req.session.user;
    }
    res.render('home', js_vars);
};

exports.logout = function(req, res){
    if(req && req.user && req.user.id){
        req.session.destroy();
        res.redirect('/login');
    }else
    res.redirect('/login');
};

exports.create = function (req, res) {
    var js_vars = _.extend({}, buildVars(), {
        navMenu : topnav.navMenu,
        title: 'Welcome'
    });
    if (req && req.user) {
        var user = req.user;
        js_vars.user = user
    }
    res.render('create', js_vars);
};

exports.profile = function (req, res) {
    var user = req.user;
    var name = req.user.user_name;
    var js_vars = _.extend({}, buildVars(), {
        navMenu: topnav.navMenu,
        title: name,
        user: user
    });
    res.render('profile', js_vars);
};
