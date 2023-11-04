const { set, get } = require('../../lib/redis');
const Book = require('../models/models/book.js');

const getBookFunc = async function getBook (id) {
    try {
        console.log("Searching the cache");
        var book = await get(id);
        if (book) {
            console.log("Cache hit");
            return book;
        } else {
            console.log("Cache miss.");
        }
    }
    catch (err) {
        console.log("Cache error: " + err.message);
    }

    try{
        var book = JSON.stringify(await Book.findOne({ where: { id: id } }));
        await set(id, book);
        return book;
    } catch(err) {
        console.log("DB error: " + err.message);
        return null;
    }
};

module.exports = { getBookFunc };