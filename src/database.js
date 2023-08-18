const Sequelize = require("sequelize");
const config = require("./config");

const sequelize = new Sequelize(
  config.db_database,
  config.db_user,
  config.db_password,
  {
    host: config.db_host,
    dialect: "mssql",
    port: config.db_port,
  }
);

module.exports = sequelize;
