const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();


const { provideUrl, uniqueId } = require("../controllers/operations");

router.get("/:key", provideUrl);
// router.post("/", (req, res) => {
//     console.log(req.body);
//     uniqueId(req, res);
// });
router.post("/", jsonParser, uniqueId);

module.exports = router;