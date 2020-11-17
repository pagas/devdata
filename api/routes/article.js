const express = require("express");
const {check, validationResult} = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const auth = require("../middleware/auth");

const Article = require("../models/Article");


/**
 * Show all articles
 */

router.get("/", auth,  async function (req, res, next) {
    const articles = await Article.find();
    res.status(200).json({
        articles: articles
    });
});


/**
 * @method - POST
 * @param - /signup
 * @description - User SignUp
 */

router.post("/create", auth,
    [
        check("title", "Title is required and can't longer than 200 characters.")
            .not()
            .isEmpty()
            .isLength({
                max: 200
            }),
        check("body", "Body is required")
            .not()
            .isEmpty()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const {title, body} = req.body;
        try {
            const article = new Article({
                title,
                body
            });

            const savedArticle = await article.save();

            res.status(200).json({
                article: savedArticle
            });

        } catch (err) {
            console.log(err.message);
            res.status(500).send("Error in Saving");
        }
    }
);

module.exports = router;
