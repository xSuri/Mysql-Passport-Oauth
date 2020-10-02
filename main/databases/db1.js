console.log("\nC0nnecting to database...")

const mysql = require('mysql')

exports.db1 = mysql.createConnection({ // Creating MYSQL Connection
  host: "WRITE", // Your Host Adress: localhost
  user: "WRITE", // Your User Name: user/root
  password: "WRITE", // Your Password DB: ""
  database: "WRITE" // Your Using Database: MyFirstTable
});

