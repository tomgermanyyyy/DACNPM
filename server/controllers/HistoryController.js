const History = require('../models/ControlHistoryModel');

exports.saveHistory = (params) => {
    let newHistory = new History(params);
    newHistory.save()
        .then(info => {
            console.log(info);
        })
        .catch(err => {
            console.log(err);
        })
}

exports.showHistory = async(req, res) => {
    try {
        const historyResult = await History.find(
            {
                plotID: req.body.selectedPlot,
                device: req.body.selectedDevice,
                timestamp: {
                    $gte: req.body.from,
                    $lte: req.body.to
                }
            }
        );
        res.status(200).json(historyResult);
    } catch (err) {
        return res.status(500).json({
            errCode: 1,
            errDetail: err.message,
            data: null,
        });
    }
}