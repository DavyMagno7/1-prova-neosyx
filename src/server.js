const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./database");
const routes = require("./routes");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use("/api", routes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});
