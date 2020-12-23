const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) {
    const about = {
        avatar_url: "https://image.winudf.com/v2/image/YmFyLmNob3VjaG91LndhbGxwYXBlcnNhbmltZV9zY3JlZW5fMF8xNTM1Njg0MzIyXzA3Nw/screen-0.jpg?fakeurl=1&type=.jpg",
        name: "Lucas Fernandes",
        role: "Aluno - Javascript",
        description: 'Programador JavaScript, Css, HTML e Aluno temporaríamente da <a href="https://rocketseat.com.br/" target="_blank">RocketSeat</a>',
        links: [
            { name: "Github", url: "https://github.com/LuscaKF" },
            { name: "Facebook", url: "https://www.facebook.com/profile.php?id=100028909786835" },
            { name: "Instagram", url: "https://www.instagram.com/lucasfernandes575/" }
        ]
    }
    return res.render("about", { about })
})

server.listen(5000, function() {
    console.log("Server is Running")
})