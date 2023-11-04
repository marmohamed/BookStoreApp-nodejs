'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      titleSearch: {
        type: Sequelize.TSVECTOR
      },
      ispn: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      authorId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Authors',
          key: 'id'
        },
        allowNull: true,
        onDelete: 'SET NULL'
      },
      shelfId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Shelves',
          key: 'id'
        },
        allowNull: true,
        onDelete: 'SET NULL'
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Books');
  }
};