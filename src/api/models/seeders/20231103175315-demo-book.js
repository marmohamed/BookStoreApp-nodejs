'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', 
    [
      {
       title: "Book1",
       ispn: "ispn1",
       quantity: 9,
       createdAt: new Date(Date.now())
      },
      {
        title: "Book2",
        ispn: "ispn2",
        quantity: 5,
        authorId: 1,
        shelfId: 1,
        createdAt: new Date(Date.now())
      }
    ], 
    {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Books', null, {});
  }
};
