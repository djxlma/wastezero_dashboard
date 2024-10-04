const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Configuração da conexão com o banco de dados
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // Coloque sua senha do MySQL aqui, se houver
  database: "bdvisight",
});

// Conectar ao banco de dados
db.connect((err) => {
  if (err) throw err;
  console.log("Conectado ao banco de dados!");
});

// Rota para listar os itens da tabela info_alimentos
app.get("/alimentos", (req, res) => {
  const sql =
    "SELECT nome_alimento, receita, ROUND(peso_liquido * 1000) AS peso_liquido, ROUND(peso_bruto * 1000) AS peso_bruto FROM info_alimentos";
  console.log("Executando SQL:", sql); // Log da consulta
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Erro na consulta:", err); // Log do erro
      return res.status(500).json({ error: err.message });
    }
    res.json(results); // Retorna os dados como JSON
  });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
