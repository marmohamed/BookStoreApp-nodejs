'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Borrowers', 
    [
      {
       firstName: 'FN1',
       lastName: "LN1",
       email: "email1@gmail.com",
       createdAt: new Date(Date.now())
      },
      {
        firstName: 'FN2',
        lastName: "LN2",
        email: "email2@gmail.com",
        createdAt: new Date(Date.now())
      }
    ], 
    {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Borrowers', null, {});
  }
};
