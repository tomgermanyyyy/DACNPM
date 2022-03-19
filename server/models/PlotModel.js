const mongoose = require("mongoose");

const plotSchema = new mongoose.Schema({
    crop: {
        type: String,
        required: true
    },
    temp: {
        type: Number,
        default: 0
    },
    humidity: {
        type: Number,
        default: 0
    },
    light: {
        type: Number,
        default: 0
    },
    temp_check: {
        type: Number,
        default: 0
    },
    humidity_check: {
        type: Number,
        default: 0
    },
    light_check: {
        type: Number,
        default: 0
    }
});

const plotModel = mongoose.model("plot", plotSchema);

module.exports = plotModel;