'use strict';

var Backbone = require('lib/ZPBackbone');
var Loader = require('lib/loader');
var LoginRouter = require('routers/LoginRouter');
var root = '/';
var router;

router = new HomeRouter({
    //options go here...
});

Loader().onReady(function () {
    Backbone.history.start({
        root: root,
        pushState: true
    });
});

