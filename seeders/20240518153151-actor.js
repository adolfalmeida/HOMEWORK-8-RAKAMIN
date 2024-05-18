"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("actor", [
      {
        first_name: "Alex",
        last_name: "Hanami",
      },
      {
        first_name: "Jason",
        last_name: "Java",
      },
      {
        first_name: "Adolf",
        last_name: "Almeida",
      },
      {
        first_name: "Jonny",
        last_name: "Wae",
      },
      {
        first_name: "Walt",
        last_name: "Disney",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**

     * Add commands to revert seed here.

     *

     * Example:

     * await queryInterface.bulkDelete('People', null, {});

     */

    await queryInterface.bulkDelete("actor", null, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
