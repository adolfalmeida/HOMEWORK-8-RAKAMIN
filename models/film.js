"use strict";
const { Model, INTEGER } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class film extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      film.belongsToMany(models.category, {
        through: models.film_category,
        foreignKey: "film_id",
      });
    }
  }
  film.init(
    {
      film_id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      release_year: DataTypes.INTEGER,
      language_id: DataTypes.INTEGER,
      rental_duration: DataTypes.INTEGER,
      length: DataTypes.INTEGER,
      replacement_cost: DataTypes.FLOAT,
      rating: DataTypes.TEXT,
      special_features: DataTypes.TEXT,
      fulltext: DataTypes.TSVECTOR,
    },
    {
      sequelize,
      modelName: "film",
      tableName: "film",
      timestamps: false,
    }
  );
  return film;
};
