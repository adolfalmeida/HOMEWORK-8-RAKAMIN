"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class actor extends Model {
    static associate(models) {}
  }

  actor.init(
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
    },
    { sequelize, modelName: "actor", tableName: "actor" }
  );

  return actor;
};
