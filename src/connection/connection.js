const mysql = require("mysql");

const conn = mysql.createConnection({
  user: "root",
  //user: "aldi89",
  password: "Lodaya789",
  host: "localhost",
  //host: "db4free.net",
  //database: "aldiexpressmysql",
  database: "ujianbackendaldi",
  port: "3306"
});

module.exports = conn;
