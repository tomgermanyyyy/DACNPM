const UserModel = require('../models/UserModel.js');

module.exports = {
  authenticate: async (username, password) => {
    const isValid = await UserModel.find({
      $and: [{ username: username }, { password: password }],
    });
    return isValid;
  },

  changePassword: async (username, oldPassword, newPassword) => {
    const user = await UserModel.findOne({ username });

    if (!user) {
      throw Error('User not found');
    }

    if (user.password !== oldPassword) {
      throw Error('Wrong old password');
    }

    user.password = newPassword;
    await user.save();
    return user;
  },
};
