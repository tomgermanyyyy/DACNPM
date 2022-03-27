const mongoose = require("mongoose");

const plotSchema = new mongoose.Schema({
    crop: {
        type: String,
        required: true
    },
    temp_value: {
        type: Number,
        default: 0
    },
    moisture_value: {
        type: Number,
        default: 0
    },
    light_value: {
        type: Number,
        default: 0
    },
    temp_check: {
        type: Number,
        default: 0
    },
    moisture_check: {
        type: Number,
        default: 0
    },
    light_check: {
        type: Number,
        default: 0
    },
    pump: {
        type: Number,
        default: 0
    },
    dome: {
        type: Number,
        default: 1,
    },
    location: {
        type: String,
        required: true
    }
});

const plotModel = mongoose.model("plots", plotSchema);

module.exports = plotModel;