var express = require("express");
var router = express.Router();
const auth = require("../middleware/auth");

router.get("/", function(req, res, next) {
    res.send("API is working properly");
});

router.get("/all", function(req, res, next) {
    res.send("THIS IS ACCESSIBLE TO ALL");
});

router.get("/user", auth, function(req, res, next) {
    res.send("API is working properly");
});

module.exports = router;
