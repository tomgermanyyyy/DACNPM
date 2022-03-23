const express = require("express");
const UserController = require("../controllers/UserController");

const router = express.Router();

router.get("/authenticate", async function (req, res) {
    console.log('GET authenticate user');
    try {
        const isValid = await UserController.authenticate(req.username, req.password);
        if(isValid) {
            res.status(200).send();
        }
        else {
            res.status(401).send("Wrong username or password");
        }
    }
    catch(error) {
        res.status(500).send(error);
    }
});

module.exports = router;