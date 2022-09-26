const { calculationsmain } = require('./calculations');

const mysql = require('mysql');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mysqlConnection = require('./connection');
const ArchiRoutes = require('./routes/routes.js');
var app = express();
const { calculations2 } = require('./calculations2');
const reactmainRouter = require('./routes/reactmain');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.static(__dirname + '/assets'));

app.use(cors());

app.use(express.static(path.join(__dirname, 'build')));

app.post('/postinputs', async (req, res) => {
  // console.log(req.body);
  res.send(calculationsmain(req.body));
});

app.post('/postOutput2Inputs', async (req, res) => {
  res.send(calculations2(req.body));
});

app.get('/udcprdetails', async (req, res) => {
  res.sendFile(__dirname + '/assets/udcprdetails.html');
});

app.get('/about', async (req, res) => {
  res.sendFile(__dirname + '/assets/about.html');
});

// app.post('/', (req, res) => {
//   var data = req.body;
//   res.sendFile(__dirname + '/assets/index.html');
//   calculations.calculationsmain(data);
// });

// app.use('/Archiinfo', ArchiRoutes);
// app.use('/reactmain', reactmainRouter);

// app.use((req, res, next) => {
//   res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
// });

app.listen(5000);
