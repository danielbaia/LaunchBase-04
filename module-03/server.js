const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const videos = require("./data");
const about = require('./about');


server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
    express: server,
    autoescape: true,
    noCache: true
})


server.get("/", function(req, res) {
    return res.render('about', { about });
})

server.get("/portfolio", function(req, res) {
    return res.render('portfolio', { items: videos });
})

server.get("/video", function(req, res) {
    const id = req.query.id;

    const video = videos.find(function(video) {
        return video.id == id;
    });

    if (!video) {
        return res.send("Video not found!");
    }

    return res.render('video', { item: video });
})

server.listen(5000, function() {
    console.log('Server is running');

});