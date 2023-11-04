'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BorrowerCheckoutBooks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      borrowerId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Borrowers',
          key: 'id'
        },
        allowNull: true
      },
      bookId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Books',
          key: 'id'
        },
        allowNull: true
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('BorrowerCheckoutBooks');
  }
};