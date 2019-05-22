'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tags', [{
      tagName: "Outerware",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tagName: "Clothing",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tagName: "Sport",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tagName: "Footware",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tagName: "Electronic",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tagName: "Household",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tagName: "Utilities",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tagName: "Kitchen",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tags', null, {});
  }
};
