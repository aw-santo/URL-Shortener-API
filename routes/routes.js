const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();


const { provideUrl, uniqueId } = require("../controllers/operations");
const url = "https://localhost:3333";
router.get("/", (req, res) => {
    res.status(300).send(`Redirect to ${url}`);
});

router.get("/:key", provideUrl);
// router.post("/", (req, res) => {
//     console.log(req.body);
//     uniqueId(req, res);
// });
router.post("/", jsonParser, uniqueId);

module.exports = router;