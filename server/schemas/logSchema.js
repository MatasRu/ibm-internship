const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const logSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    price: {
        type: Number,
        required: true
    },
})

module.exports = mongoose.model("log", logSchema)