const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "seu_usuario",
  password: "sua_senha",
  database: "bdvisight",
});

// Endpoint para obter todos os alimentos
app.get("/api/alimentos", (req, res) => {
  const query =
    "SELECT * FROM info_alimentos ORDER BY id_alimentos DESC LIMIT 1"; // Obtém o último alimento
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

// Inicia o servidor
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
