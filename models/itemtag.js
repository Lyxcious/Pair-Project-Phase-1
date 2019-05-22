'use strict';
module.exports = (sequelize, DataTypes) => {
  const ItemTag = sequelize.define('ItemTag', {
    ItemId: DataTypes.INTEGER,
    TagId: DataTypes.INTEGER
  }, {});
  ItemTag.associate = function(models) {
    ItemTag.belongsTo(models.Item, {foreignKey: "ItemId"})
    ItemTag.belongsTo(models.Tag, {foreignKey: "TagId"})
  };
  return ItemTag;
};