const Sequelize = require("sequelize");
const sequelize = require("./database");

const BoardGame = sequelize.define("BoardGame", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  players: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  ageRange: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = BoardGame;
