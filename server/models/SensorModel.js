const mongoose = require("mongoose");

const sensorSchema = new mongoose.Schema({
    type: {
        type: Number,
        required: true
    },
    plotid: mongoose.Types.ObjectId
});

const sensorModel = mongoose.model("sensor", sensorSchema);

module.exports = sensorModel;