import express from "express";

const PORT = 3000;

const app = express();

app.use(express.static("."));

app.get("/", (req, res) => {
  res.render("index.html");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});
