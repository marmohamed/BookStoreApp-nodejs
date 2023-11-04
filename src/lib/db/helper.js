// import chalk from 'chalk';
const sequelize = require('./index');

const testDbConnection = async () => {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
      return true;
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      return false;
    }
  };
  
module.exports = testDbConnection;