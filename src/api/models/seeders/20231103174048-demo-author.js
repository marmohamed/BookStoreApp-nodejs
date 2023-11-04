'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Authors', 
     [
       {
        name: 'author1',
        createdAt: new Date(Date.now())
       },
       {
        name: 'author2',
        createdAt: new Date(Date.now())
       }
     ], 
     {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Authors', null, {});
  }
};
