const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const keywordSchema = new Schema({
    ip: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    keyword: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("keywords searched", keywordSchema)