'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Transactions', ['UserId'], {
      type: 'foreign key',
      name: 'UserId',
      references: { //Required field
        table: 'Users',
        field: 'id'
      },
      onDelete: 'set null',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface. removeConstraint('Transactions', 'UserId', {})
  }
};
