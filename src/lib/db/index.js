const Sequelize = require('sequelize');
const config = require('../../config/index.js');

const sequelize = new Sequelize(config.db.dbname, config.db.user, config.db.password, 
  { 
    host: config.db.host, 
    dialect: 'postgres',
    replication: {
      // add more for reads
      read: [
        { host: config.db.host, username: config.db.user, password: config.db.password }
      ],
      write: { host: config.db.host, username: config.db.user, password: config.db.password  }
    },
  });

module.exports = sequelize;