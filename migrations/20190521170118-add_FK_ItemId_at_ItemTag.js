'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('ItemTags', ['ItemId'], {
      type: 'foreign key',
      name: 'ItemId2',
      references: { //Required field
        table: 'Items',
        field: 'id'
      },
      onDelete: 'set null',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface. removeConstraint('ItemTags', 'ItemId2', {})
  }
};
