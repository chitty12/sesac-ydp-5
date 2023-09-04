// const ps = process.env;
// console.log(ps);

const express = require('express');
const app = express();
const dotenv = require('dotenv');
const { prototype } = require('events');
dotenv.config();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
  console.log(process.env.NAME);
  console.log(process.env.NODE);
  res.send('HELLO, world!');
});

app.listen(PORT, () => {
  console.log(`${PORT} 연결성공`);
});
