const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./database");
const routes = require("./routes");
const config = require("./config");

const app = express();
const PORT = config.app_port;

app.use(bodyParser.json());
app.use("/api", routes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});
