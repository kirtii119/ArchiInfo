const mysql = require('mysql');
var mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root1234',
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

// async function connect() {
//   try {
//     await new Promise((resolve, reject) => {
//       mysqlConnection.connect((err) => {
//         return err ? reject(err) : resolve();
//       });
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }

// connect();

module.exports = mysqlConnection;
