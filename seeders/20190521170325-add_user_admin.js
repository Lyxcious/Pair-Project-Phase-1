'use strict';
const bcrypt = require("bcryptjs")
module.exports = {
  up: (queryInterface, Sequelize) => {
    let hash = bcrypt.hashSync("adminshopnshop", 10)
    return queryInterface.bulkInsert('Users', [{
      username: "admin",
      password: hash,
      email: "admin@shopnshop.com",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('Users', null, {});
  }
};
