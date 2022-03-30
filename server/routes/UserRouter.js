const express = require('express');
const UserController = require('../controllers/UserController');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/authenticate', async function (req, res) {
  console.log('GET authenticate user');
  try {
    const isValid = await UserController.authenticate(
      req.username,
      req.password
    );
    if (isValid) {
      res.status(200).json({ message: 'Login success' });
    } else {
      res.status(401).send('Wrong username or password');
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

router.patch('/password', auth, async function (req, res) {
  try {
    await UserController.changePassword(
      req.body.username,
      req.body.oldPassword,
      req.body.newPassword
    );

    return res.status(200).json({ message: 'Password changed' });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

module.exports = router;
