const mysql = require('mysql');
var mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'Archiinfo',
  multipleStatements: true,
});

mysqlConnection.connect((err) => {
  if (!err) {
    console.log('MySql Connected');
  } else {
    console.log(err);
  }
});

module.exports = mysqlConnection;
