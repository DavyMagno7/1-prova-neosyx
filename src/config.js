require("dotenv").config();

module.exports = {
  db_port: process.env.DB_PORT,
  db_user: process.env.DB_USER,
  db_password: process.env.DB_PASSWORD,
  db_database: process.env.DB_DATABASE,
  db_host: process.env.DB_HOST,
  app_port: process.env.APP_PORT,
};
