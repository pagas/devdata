const mongoose = require("mongoose");

const {Schema} = mongoose;

const articleSchema = new Schema({
    title: String, // String is shorthand for {type: String}
    authorId: String,
    body: String,
    createdAt: {type: Date, default: Date.now},
    publishedAt: {type: Date, default: Date.now},
    published: Boolean,
    slug: String
});

// export model user with UserSchema
module.exports = mongoose.model("article", articleSchema);
