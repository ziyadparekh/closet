'use strict';

// ADD PROCESS.ENV VARIABLES HERE
// eg process.env.PORT, process.env.LOCAL

process.env.WEB = process.env.WEB || 'http://localhost:3010';
process.env.LOCAL = process.env.WEB;

var cluster;
var app;
var worker;

cluster = require('cluster');
app = require('./express-app');

var workers = {};
var count = require('os').cpus().length;

function spawn(i) {
    console.log('spawn on cpu ' + i);
    var worker = cluster.fork();
    workers[worker.pid] = worker;
    return worker;
}

if (cluster.isMaster) {
    for (var i = 0; i < count; i++) {
        spawn(i);
    }
    cluster.on('exit', function(worker) {
        console.log('worker ' + worker.pid + ' died. spawning a new process...');
        delete workers[worker.pid];
        spawn();
    });
} else {
    app.listen(process.env.PORT || 3010);
    console.log("Closet started on port 3010");
}