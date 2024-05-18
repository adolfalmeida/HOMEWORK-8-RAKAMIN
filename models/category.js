"use strict";
const { Model, INTEGER } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      category.belongsToMany(models.film, {
        through: models.film_category,
        foreignKey: "category_id",
      });
    }
  }
  category.init(
    {
      category_id: {
        type: INTEGER,
        primaryKey: true,
      },
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "category",
      tableName: "category",
      timestamps: false
    }
  );
  return category;
};
