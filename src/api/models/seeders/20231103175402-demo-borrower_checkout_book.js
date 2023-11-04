'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('BorrowerCheckoutBooks', 
    [
      {
       borrowerId: '1',
       bookId: "1",
       createdAt: new Date(Date.now())
      }
    ], 
    {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('BorrowerCheckoutBooks', null, {});
  }
};
