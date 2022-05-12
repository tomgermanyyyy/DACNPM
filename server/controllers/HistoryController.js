const History = require("../models/ControlHistoryModel");

exports.saveHistory = async (req, res) => {
  let newHistory = new History(req.body);

  try {
    const data = await newHistory.save();
    console.log("Data:", data);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
  // newHistory.save()
  //     .then(info => {
  //         console.log(info);
  //         res.status(200).json(info);
  //     })
  //     .catch(err => {
  //         console.log(err);
  //         res.status(500).json(err);
  //     })
};

exports.showHistory = async (req, res) => {
  try {
    req.body.to = new Date(req.body.to).setHours(23, 59);
    const historyResult = await History.find({
      plotID: req.body.selectedPlot,
      device: req.body.selectedDevice,
      createdAt: {
        $gte: req.body.from,
        $lte: req.body.to,
      },
    }).sort({ createdAt: -1 });
    res.status(200).json(historyResult);
  } catch (err) {
    return res.status(500).json({
      errCode: 1,
      errDetail: err.message,
      data: null,
    });
  }
};
