const express = require("express");
const PlotModel = require('../models/PlotModel')
const ADAFRUIT_URL= "https://io.adafruit.com/api/v2"
const ADAFRUIT_NAME = "hbngo21"
const adafruitRoute = express.Router()
const mapDeviceAdafruit = {
    dome: 'DOME',
    light_value: 'LIGHT-SENSOR',
    pump: 'PUMP',
    soil_value: 'SOIL-MOISTURE-SENSOR',
    temp_value: 'TEMP-SENSOR'
}
const sendSuccess = (res, message, data = null) => {
    let responseJson = {
        success: true,
        message: message
    }
    if (data) responseJson.data = data
    return res.status(200).json(responseJson)
}

/**
 * @route POST /api/adafruit/send-data
 * @description send data from gateway to socket io server & update to database
 * @access private
 */
 adafruitRoute.post('/send-data', async (req, res) => {
    console.log(req.body)
    
    const { productId, value, device } = req.body
    try {
        let updateQuery = {}
        updateQuery[device] = value
        const check = await PlotModel.findByIdAndUpdate(productId, updateQuery)
        return sendSuccess(res, `Send data to socket server successfully.`, {
            productId, value, device
        })
    } catch (error) {
        console.log(error)
    }
})

/**
 * @route /api/adafruit/update
 * @description affect to device
 * @access private
 */
 adafruitRoute.post('/update', async (req, res) => {
    const { productId, value, device } = req.body
    try {
        let updateQuery = {}
        updateQuery[device] = value

        const check = await PlotModel.findByIdAndUpdate(productId, updateQuery)

        const headers = [
            'Content-Type: application/json',
            `X-AIO-Key: ${process.env.ADAFRUIT_TOKEN}`
        ]
        const data = {value: `${productId}-${value}`}

        await sendRequest(`${ADAFRUIT_URL}/${ADAFRUIT_NAME}/feeds/${device}/data`, "POST", headers, data)
        return sendSuccess(res, `Send data to microbit device ${device} successfully.`, {
            productId, value, device
        })
    } catch (error) {
        console.log(error)
    }
})

module.exports = adafruitRoute;