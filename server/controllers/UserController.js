const UserModel = require("../models/UserModel.js");

module.exports = {
  authenticate: async (username, password) => {
    const isValid = await UserModel.find({ $and: [{userName: userName}, {password: password}]});
    return isValid;
  }
}