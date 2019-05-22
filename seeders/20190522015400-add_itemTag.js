'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ItemTags', [{
      ItemId: 1,
      TagId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      ItemId: 1,
      TagId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      ItemId: 2,
      TagId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      ItemId: 2,
      TagId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      ItemId: 2,
      TagId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      ItemId: 3,
      TagId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      ItemId: 3,
      TagId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      ItemId: 4,
      TagId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      ItemId: 5,
      TagId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      ItemId: 5,
      TagId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      ItemId: 5,
      TagId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ItemTags', null, {});
  }
};
