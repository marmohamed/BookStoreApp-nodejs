const express = require("express");
const rateLimitMiddleware = require('../middlewares/ratelimit.js');
const router = express.Router();

// Require controller modules.
const {
    index,
    getOne,
    create,
    searchByTitle
} =  require("../controllers/bookController.js");


router.get("/books", index);
router.get("/book/:id", getOne);
router.post("/book", rateLimitMiddleware, create);
router.get("/books/search", searchByTitle);
// router.put("/book/:id", update);
// router.delete("/book/:id", remove);
// router.search("/book", search);

// module.exports = router;

module.exports = router;