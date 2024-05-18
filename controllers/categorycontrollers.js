const model = require("../models");

class Category {
  static async getAllCategory(req, res) {
    try {
      const data = await model.category.findAll();
      res.status(200).json(data);
    } catch (error) {
      console.log(`Category Error: ${error}`);
    }
  }
}

module.exports = Category;
