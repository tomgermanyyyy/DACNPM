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
    pumb: {
        type: Boolean,
        default: false
    },
    dome: {
        type: Boolean,
        default: false,
    },
    location: {
        type: String,
        required: true
    }
});

const plotModel = mongoose.model("plot", plotSchema);

module.exports = plotModel;