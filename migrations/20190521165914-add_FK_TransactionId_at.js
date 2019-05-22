'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('TransactionItems', ['TransactionId'], {
      type: 'foreign key',
      name: 'TransactionId',
      references: { //Required field
        table: 'Transactions',
        field: 'id'
      },
      onDelete: 'set null',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface. removeConstraint('TransactionItems', 'TransactionId', {})
  }
};
