const PlotModel = require("../models/PlotModel");

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

  comparisonAndUpdate: async (req, res) => {
    try {
      const { id } = req.params;
      const plot = await PlotModel.findById(id);
      if (plot) {
        const {
          light_value,
          light_check,
          moisture_value,
          moisture_check,
          temp_value,
          temp_check,
        } = plot;
        // Turn off pump and close the dome by default
        plot.pump = 0; //
        plot.dome = 0; //
        
        if (light_value > light_check || temp_value > temp_check) {
          plot.dome = 1; // Open the dome
        }
        
        if (moisture_value < moisture_check) {
          plot.pump = 1; // Turn on pump machine
        }
        
        // Update database
        const plotUpdated = await PlotModel.findByIdAndUpdate(
          id,
          { ...plot },
          { returnDocument: "after" }
        );
        res.status(200).json(plotUpdated);
      }
      else {
          throw new Error("Plot not found")
      }
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
        { returnDocument: "after" }
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
