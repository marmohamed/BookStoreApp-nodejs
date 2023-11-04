const config = require('../config/');
const swaggerAutogen = require('swagger-autogen')();

const options = {
  openapi: 'OpenAPI 3',   // Enable/Disable OpenAPI. By default is null
  language: 'en-US',      // Change response language. By default is 'en-US'
  disableLogs: false,     // Enable/Disable logs. By default is false
  autoHeaders: false,     // Enable/Disable automatic headers capture. By default is true
  autoQuery: false,       // Enable/Disable automatic query capture. By default is true
  autoBody: false         // Enable/Disable automatic body capture. By default is true
}

const doc = {
  info: {
    version: '2.0',      // by default: '1.0.0'
    title: 'Bookstore Apis',      
    description: 'API for Managing calls',
    contact: {
        'name': 'API Support',
        'email': 'mariam@gmail.com'
    },
  },
  host: localhost + ":" + config.server.port,      // by default: 'localhost:3000'
  basePath: '/',  // by default: '/'
  schemes: ['http'],   // by default: ['http']
  consumes: ['application/json'],  // by default: ['application/json']
  produces: ['application/json'],  // by default: ['application/json']
  tags: [        // by default: empty Array
    {
      name: 'Books CRUD',         // Tag name
      description: 'Books apis',  // Tag description
    },
    {
        name: 'Health',
        description: 'Health Check'
    }
  ],
  securityDefinitions: {},  // by default: empty object
  definitions: {
    healthResponse: {
      code: "200",
      message: "Ok",
    },
    'errorResponse.400': {
      code: "400",
      message: "mBaf request",
    },
    'errorResponse.403': {
      code: "403",
      message: "403",
    },
    'errorResponse.404': {
      "code": "404",
      "message": "Not found",
    },
    'errorResponse.500': {
      code: "500",
      message: "Internal server error",
    }
  },          // by default: empty object (Swagger 2.0)
};

const outputFile = './swagger.json';
const endpointsFiles = ['../api/routes/index.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as: index.js, app.js, routes.js, ... */
swaggerAutogen(outputFile, endpointsFiles, doc);

// swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
//     require('./index.js'); // Your project's root file
//   });