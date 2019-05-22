'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('ItemTags', ['TagId'], {
      type: 'foreign key',
      name: 'TagId',
      references: { //Required field
        table: 'Tags',
        field: 'id'
      },
      onDelete: 'set null',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface. removeConstraint('ItemTags', 'TagId', {})
  }
};
