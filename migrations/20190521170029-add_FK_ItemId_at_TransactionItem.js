'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('TransactionItems', ['ItemId'], {
      type: 'foreign key',
      name: 'ItemId1',
      references: { //Required field
        table: 'Items',
        field: 'id'
      },
      onDelete: 'set null',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface. removeConstraint('TransactionItems', 'ItemId1', {})
  }
};
