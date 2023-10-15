//const mongoose = require('mongoose')
const PointSchema = require("./Utils/PointSchema");
const mongoose = require('mongoose').default;


const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase:true,
    },
    password: {
        type: String,
        required: true,
    },
    location: {
        type: PointSchema,
        index: '2dsphere',
    }
})

module.exports = mongoose.model('User', Schema)