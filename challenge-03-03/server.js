const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const courses = require("./data")
const about = require("./about");

server.use(express.static("public"));
server.set('view engine', 'njk');

nunjucks.configure("views", {
    express: server,
    autoescape: true,
    noCache: true
})


server.get('/', function(req, res) {
    res.render("about", { about })
})

server.get('/courses', function(req, res) {
    res.render("courses", { courses })
})

server.get('/courses/:id', function(req, res) {
    const id = req.params.id;

    const course = courses.find(function(course) {
        return course.title == id;
    })

    if (!course) {
        return res.render("not-found");
    }
    return res.render('description', { course });
})





server.use(function(req, res) {
    res.status(400).render("not-found");
})

server.listen(5000, function() {
    console.log('Server is running!');
})