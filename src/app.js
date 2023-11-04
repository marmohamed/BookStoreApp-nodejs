const express = require('express');
const config = require('./config/index');
const db = require('./lib/db');
const dbTestInit  = require( './lib/db/helper');
// const swaggerDocs  = require( './docs/swagger');
const swaggerUi  = require( 'swagger-ui-express');
const setAllRoutes  = require( '../src/api/routes');
const bodyParser  = require('body-parser');
const {set, connect}  = require('./lib/redis');
const swaggerDocument = require('./docs/swagger.json');

const app = express();

(async function run() {

  // postgres
  await db.sync({ force: false });

  await dbTestInit();

  // Redis
  await connect();
  await set("test", 1);

  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  );

  setAllRoutes(app);

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {explorer: true}));

  // Server 
  var server = app.listen(config.server.port, config.server.ip, () => {
    // Info
    console.log(`-------\nServer-> 
          mode: [${`${config.mode}`}]
          url: ${`http://${config.server.ip}:${config.server.port}`}\n-------`);
    // Ready!
    console.log(`>>nodetomic-api ready!<<`);
  });

  server.timeout = 1000;

})();