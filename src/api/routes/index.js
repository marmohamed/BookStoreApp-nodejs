const bookrouter = require('./book.js');

const setRoutesFunc = function setAllRoutes(app){
    app.use("/api/v1/", bookrouter);
};

module.exports = setRoutesFunc;