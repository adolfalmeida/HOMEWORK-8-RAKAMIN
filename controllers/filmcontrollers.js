// handle req, res, dan validasi
const model = require("../models");

class Film {
  static async getAllFilm(req, res) {
    try {
      const data = await model.film.findAll();
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.json({
        message:
          "Cannot display all films",
      });
    }
  }

  static async getFilmById(req, res) {
    try {
      const id = req.params.id;
      const data = await model.film.findByPk(id);

      if (!data) {
        res.status(404).json({
          message: "ID not found",
        });
      } else {
        res.status(200).json(data);
      }
    } catch (error) {
      console.log(error);
      res.json({ message: "Error" });
    }
  }

  static async getFilmByCategory(req, res) {
    const categoryName = req.query.search
      ? req.query.search.toLowerCase()
      : null;

    if (!categoryName) {
      return res
        .status(400)
        .json({
          message:
            "?",
        });
    }

    try {
      const data = await model.film.findAll({
        include: [
          {
            model: model.category,
            where: model.sequelize.where(
              model.sequelize.fn("LOWER", model.sequelize.col("name")),
              categoryName
            ),
            through: { attributes: [] },
          },
        ],
      });

      if (data.length === 0) {
        res.json({
          message: "Film not found",
        });
      } else {
        res.status(200).json(data);
      }
    } catch (error) {
      console.log(error);
      res.json({ message: "Error" });
    }
  }
}

module.exports = Film;
