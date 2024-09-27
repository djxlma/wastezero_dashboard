// server.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bdvisight'
});

db.connect(err => {
  if (err) throw err;
  console.log('Conectado ao banco de dados!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
