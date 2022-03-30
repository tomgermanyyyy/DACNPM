const express = require('express');
const router = express.Router();
const PlotController = require('../controllers/PlotController');

// get all plots
router.get('/', PlotController.getAllPlot);

// get plot info, update plot
router
    .route('/:id')
    .get(PlotController.getPlotInfo)
    .put(PlotController.updatePlot)
router
    .route('/check_update/:id')
    .get(PlotController.comparisonAndUpdate)
module.exports = router;
