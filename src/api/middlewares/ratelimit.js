const setRateLimit = require('express-rate-limit');
const config = require('../../config/index.js');

// Rate limit middleware
const setLimitFunc = setRateLimit({
  windowMs: config.ratelimit.windowMs,
  max: config.ratelimit.max,
  message: "You have exceeded your " + config.ratelimit.max + " requests per minute limit.",
  headers: true,
});

module.exports = setLimitFunc;