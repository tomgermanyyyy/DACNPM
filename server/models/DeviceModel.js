const mongoose = require("mongoose");

const deviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    plotid: mongoose.Types.ObjectId,
    status: {
        type: String,
        required: true
    }
});

const deviceModel = mongoose.model("device", deviceSchema);

module.exports = deviceModel;