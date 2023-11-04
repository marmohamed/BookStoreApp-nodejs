const redis = require('redis');
const config = require('../../config');

var client = redis.createClient({
    url: 'redis://' + config.redis.host + ':'+config.redis.port
  });
  
  client.on('connect', function() {
      console.log('Redis Database connected'+'\n');
  });
  
  client.on('reconnecting', function() {
      console.log('Redis client reconnecting');
  });
  
  client.on('ready', function() {
      console.log('Redis client is ready');
  });
  
  client.on('error', function (err) {
      console.log('Something went wrong ' + err);
  });
  
  client.on('end', function() {
      console.log('\nRedis client disconnected');
      console.log('Server is going down now...');
      process.exit();
  });
  
const set = function (key, value) {
    client.set(key, value, redis.print);
    return 'done';
  };

  const get = function (key, value) {
    return client.get(key);
  };
  
  const connect = function() {
    client.connect();
  };

  const close = function() {
    client.quit();
  };

module.exports = {set, get, connect, close}