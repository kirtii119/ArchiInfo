const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const mysqlConnection = require("./connection");
const ArchiRoutes = require("./routes/routes.js");
var app = express();
const calculations = require("./calculations")
const reactmainRouter = require('./routes/reactmain');

app.use(bodyParser.urlencoded({extended: true}));


 app.use(express.static(__dirname + '/assets'));

 app.post("/",(req, res)=>{
    var data = req.body;
    res.sendFile(__dirname + '/assets/index.html')
    calculations.calculationsmain(data)
 })

app.use("/Archiinfo", ArchiRoutes);
app.use('/reactmain', reactmainRouter);


app.listen(3000)