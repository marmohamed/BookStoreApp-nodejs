'use strict';
const Model = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Borrower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Borrower.hasMany(models.Book, 
        {
          through: models.BorrowerCheckoutBooks,
          as: 'book',
          foreignKey: 'borrowerId'
        });
    }
  }

  Borrower.init({
    firstName: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true
      },
    }
  }, {
    indexes: [
      // Create a unique index on email
      {
        unique: true,
        fields: ['email']
      }
    ],
    sequelize,
    modelName: 'Borrower',
  });
  
  return Borrower;
};