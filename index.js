var mysql = require('mysql');

var con = mysql.createConnection({
  host: "178.62.59.76",
  user: "graziano",
  password: "Centur1pe",
  port: '3306',
  // socketPath: "/home/akallabeth/var/run/mysqld/mysqld.sock",
  database: 'stracolletta_alimentare'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
