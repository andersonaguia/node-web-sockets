const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "esp32",
  password: "arduino@1235",
  database: "solar_tambau",
});

