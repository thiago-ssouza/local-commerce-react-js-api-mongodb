//const mongoose = require('mongoose')
const mongoose = require('mongoose').default;

const PointSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true,
    },
    coordinates: {
        type: [Number],
        required: true,
    }
})

module.exports = PointSchema