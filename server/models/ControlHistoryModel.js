const mongoose = require("mongoose");

const controlHistorySchema = new mongoose.Schema({
    plotID : mongoose.Types.ObjectId,
    device: {
        type: String,
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
    success: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

const controlHistoryModel = mongoose.model("History", controlHistorySchema);

module.exports = controlHistoryModel;