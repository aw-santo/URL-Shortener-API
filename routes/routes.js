const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();


const { provideUrl, uniqueId } = require("../controllers/operations");
const url = "https://aw-santo.github.io/url-shortener/";
router.get("/", (req, res) => {
    res.status(302).redirect(url);
});

router.get("/:key", provideUrl);
router.post("/", jsonParser, uniqueId);

module.exports = router;