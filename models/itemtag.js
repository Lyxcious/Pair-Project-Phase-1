'use strict';
module.exports = (sequelize, DataTypes) => {
  const ItemTag = sequelize.define('ItemTag', {
    ItemId: DataTypes.INTEGER,
    TagId: DataTypes.INTEGER
  }, {});
  ItemTag.associate = function(models) {
  };
  return ItemTag;
};