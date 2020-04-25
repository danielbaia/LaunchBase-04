const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const courses = require("./data")
const about = require("./about");

server.use(express.static("public"));
server.set('view engine', 'njk');

nunjucks.configure("views", {
    express: server
})


server.get('/', function(req, res) {
    res.render("about", { about })
})

server.get('/course', function(req, res) {
    res.render("course", { courses })
})


server.use(function(req, res) {
    res.status(400).render("not-found");
})

server.listen(5000, function() {
    console.log('Server is running!');
})