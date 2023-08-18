const express = require("express");
const BoardGame = require("./boardgame");

const router = express.Router();

router.post("/games", async (req, res) => {
  try {
    const { title, description, players, ageRange } = req.body;
    const newGame = await BoardGame.create({
      title,
      description,
      players,
      ageRange,
    });
    res.json(newGame);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/games", async (req, res) => {
  try {
    const games = await BoardGame.findAll();
    res.json(games);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/games/:id", async (req, res) => {
  try {
    const gameId = req.params.id;
    const { title, description, players, ageRange } = req.body;
    const updatedGame = await BoardGame.update(
      { title, description, players, ageRange },
      { where: { id: gameId } }
    );
    res.json({ message: "Jogo foi atualizado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/games/:id", async (req, res) => {
  try {
    const gameId = req.params.id;
    await BoardGame.destroy({ where: { id: gameId } });
    res.json({ message: "Jogo foi excluido" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
