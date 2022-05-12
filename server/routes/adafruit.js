const express = require("express");
const PlotModel = require('../models/PlotModel')
const ADAFRUIT_URL= "https://io.adafruit.com/api/v2"
const ADAFRUIT_NAME = "hbngo21"
const ADAFRUIT_KEY = "aio_tWnv46UnSeETBGuPzyBpun2r4w3S"
const router = express.Router()
const axios = require('axios').default;
const feedID = {
    dome: 'dome',
    light_value: 'light-sensor',
    pump: 'pump',
    soil_value: 'soil-moisture-sensor',
    temp_value: 'temp-sensor'
}

 router.post('/send', async (req, res) => {
    console.log(req.body)
    const { plotId, name, value } = req.body
    try {
        let query = {}
        query[name] = value
        const data = await PlotModel.findByIdAndUpdate(plotId, query)
        res.status(200).json(data);
    } catch (error) {
        console.log(error)
    }
})

 router.post('/update', async (req, res) => {
    console.log(req.body)
    const { plotId, name, value } = req.body
    try {
        var config = {
            headers: {
                "Content-Type": "application/json",
                "X-AIO-Key": ADAFRUIT_KEY
            }
        }
        const data = {value: `${value}`}

        axios.post(`${ADAFRUIT_URL}/${ADAFRUIT_NAME}/feeds/${feedID[name]}/data`, data, config)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;