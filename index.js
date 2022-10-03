const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "esp32",
  password: "arduino@1235",
  database: "solar_tambau",
});

const findBombas = () => {
    console.log("1")
    con.connect((err) => {
        console.log("2")
        if (err) throw err;
        console.log("3")
        con.query("SELECT * FROM stat_bombas ORDER BY data DESC LIMIT 1", (err, result, fields) => {
          if (err) throw err;
          console.log("RESULT: ", result);          
        })               
    });    
}

const app = require('./app');
const appWs = require('./app-ws');

const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`App Express is running!`);
})

const wss = appWs(server);

setInterval(() => {
  
  // findBombas()
      wss.broadcast({ result: Math.random() });    
}, 5000)

setTimeout(() => {
  findBombas()
  setTimeout(() => {
    findBombas()
  }, 5000);
}, 5000);

