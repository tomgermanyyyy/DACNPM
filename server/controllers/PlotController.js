const PlotModel = require('../models/PlotModel');

module.exports = {
    getAllPlot: async (req, res) => {
        try {
            const plots = await PlotModel.find({});
            res.status(200).json(plots);
        } catch (err) {
            return res.status(500).json({
                errCode: 1,
                errDetail: err.message,
                data: null,
            });
        }
    },

    getPlotInfo: async (req, res) => {
        try {
            const { id } = req.params;
            const plot = await PlotModel.findById(id);
            res.status(200).json(plot);
        } catch (err) {
            return res.status(500).json({
                errCode: 1,
                errDetail: err.message,
                data: null,
            });
        }
    },

    updatePlot: async (req, res) => {
        try {
            const { id } = req.params;
            const plot = await PlotModel.findByIdAndUpdate(
                id,
                { ...req.body },
                { returnDocument: 'after' }
            );
            res.status(200).json(plot);
        } catch (err) {
            return res.status(500).json({
                errCode: 1,
                errDetail: err.message,
                data: null,
            });
        }
    },
};
