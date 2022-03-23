const PlotModel = require("../models/PlotModel");

module.exports = {
  getAllPlot: async () => {
    return await PlotModel.find();
  },

  getPlotInfo: async (_id) => {
    let data = await PlotModel.find({_id:id});
    return data;
  },

}