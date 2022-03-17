const mongoose = require("mongoose");

const controlHistorySchema = new mongoose.Schema({
    deviceId: mongoose.Types.ObjectId,
    timestamp: {
        type: Date,
        required: true
    },
    status: {
        type: String, 
        required: true
    },
    user: {
        type: String,
        required: true
    },
});

const controlHistoryModel = mongoose.model("control-history", controlHistorySchema);

module.exports = controlHistoryModel;