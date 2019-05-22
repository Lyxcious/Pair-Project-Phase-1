'use strict';
const bcrypt = require("bcryptjs")

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    }
  }, {});

  User.addHook("beforeSave", "encryptPassword", (user, option) => {
    let hash = bcrypt.hashSync(user.password, 10)
    user.password = hash
    console.log(hash);
  })

  User.associate = function(models) {
    User.hasMany(models.Transaction, {foreignKey: "UserId"})
  };
  return User;
};