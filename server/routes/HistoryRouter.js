const express = require('express');
const router = express.Router();
const HistoryController = require('../controllers/HistoryController');

router.post('/search', HistoryController.showHistory);

module.exports = router;