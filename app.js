const express = require('express');
const app = express();
const host = '127.0.0.1';
const port = 3000;
app.listen(port, () => {
    console.log(`My app listening on http://${host}:${port}`);
  });
app.get('/', (req, res) => {
  res.send('<h1>Benvenuto nel mio blog!</h1>')
});
