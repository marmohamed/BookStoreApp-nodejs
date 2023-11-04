const configs = {
  server: { // Express
    ip: process.env.SERVER_HOST || 'localhost',
    port: process.env.SERVER_PORT || 8000,
  },
  log: true, // show logs
  db: {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "mariam",
    password: process.env.DB_PASSWORD || "12345",
    dbname: process.env.DB_NAME || "bookstoredb",
  },
  swagger: {
    title: "API Docs",
    version: "1.0.0"
  },
  redis: {
    host: process.env.REDIS_HOST || "127.0.0.1",
    port: process.env.REDIS_PORT ||"6379"
  },
  ratelimit: {
    windowMs: 60 * 1000,
    max: 5
  }
};

module.exports = configs;