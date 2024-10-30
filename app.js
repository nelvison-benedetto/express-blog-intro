require('dotenv').config();
//console.log(process.env.DB_USER)  //print nelvison

const express = require('express');
const app = express();
const host = '127.0.0.1';
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://${host}:${port}`);
  });
app.get('/', (req, res) => {
  res.send('<h1>Benvenuto nel mio blog!</h1>')
});


