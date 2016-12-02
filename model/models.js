var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//blog
var blogSchema = new Schema({
    title: String,
    author: String,
    body: String,
    image: String,
    category: String,
    comments: [{
        body: String,
        createdAt: { type: Date, 'default': Date.now },
        user: {
            name: String,
            provider: String
        },
        image: String

    }],
    date: { type: Date, 'default': Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
});

var categorySchema = new Schema({
    name: String
});

module.exports.blog = mongoose.model('Blog', blogSchema);
module.exports.category = mongoose.model('category', categorySchema);
