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

// Nova rota para listar os itens da tabela info_alimentos
app.get('/alimentos', (req, res) => {
  const sql = 'SELECT * FROM info_alimentos';
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results); // Retorna os dados como JSON
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
