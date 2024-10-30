console.log("Hi");
const express = require('express');
const app = express();
const host = '127.0.0.1';
const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening on http://${host}:${port}`);
  });
app.get('/', (req, res) => {
  res.send('Hello World!')
});
