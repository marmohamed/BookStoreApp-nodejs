'use strict';
const Model = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class BorrowerCheckoutBook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BorrowerCheckoutBook.hasOne(models.Borrower, { onDelete: 'CASCADE' });
      BorrowerCheckoutBook.hasOne(models.Book, { onDelete: 'CASCADE' });
    }
  }
  BorrowerCheckoutBook.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BorrowerCheckoutBook',
  });
  return BorrowerCheckoutBook;
};