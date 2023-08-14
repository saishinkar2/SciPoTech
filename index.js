const {getVideos} = require("./Services/notion")
const express= require('express')
const {newRoute, routes} = require("express-quickrouter")
const {authenticate} = require("./Services/Routes/middleware")
const rts = require('./Services/Routes/routes');
const path = require("path");
const app = express();
// app.use(express.static(path.resolve('./public')))

for (let i = 0; i < rts.r.length; i++) {
    app.use(rts.r[i], routes)
}
app.listen(8000)
