'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Items', [{
      itemName: "Jaket",
      itemDesc: "Jaket kulit kualitas KW Super",
      price: 300000,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      itemName: "Sepatu",
      itemDesc: "Sepatu Babibas",
      price: 700000,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      itemName: "TV",
      itemDesc: "LCD TV PanasBanget",
      price: 2300000,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      itemName: "Payung",
      itemDesc: "Payung super besar",
      price: 75000,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      itemName: "Blender",
      itemDesc: "Blender super",
      price: 500000,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Items', null, {});
  }
};
