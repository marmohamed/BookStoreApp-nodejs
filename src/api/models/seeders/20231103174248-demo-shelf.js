'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Shelves', 
     [
       {
        location: 'shelf1',
        createdAt: new Date(Date.now())
       },
       {
        location: 'shelf2',
        createdAt: new Date(Date.now())
       }
     ], 
     {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Shelves', null, {});
  }
};
