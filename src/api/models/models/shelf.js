'use strict';
const Model = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Shelf extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Shelf.hasOne(models.Book, { onDelete: 'SET NULL' });
    }
  }
  Shelf.init({
    location: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    }
  }, {
    sequelize,
    modelName: 'Shelf',
  });
  return Shelf;
};