'use strict';
const Model = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Author.hasMany(models.Book);
    }
  }
  Author.init({
    name: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
      validate: {
        notEmpty: true,
        isAlphanumeric: true, 
      },
    }
  }, {
    sequelize,
    modelName: 'Author',
  });
  return Author;
};