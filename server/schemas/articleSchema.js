const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    ip: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    article: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("articles pressed", articleSchema)