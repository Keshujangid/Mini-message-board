const express = require("express");
const ejs = require('ejs');
const path = require("path")
const app = express();
const router = require('./routes/index')
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use('/', router)


app.listen(process.env.PORT || 3000)