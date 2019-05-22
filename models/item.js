'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    itemName: DataTypes.STRING,
    itemDesc: DataTypes.TEXT,
    price: DataTypes.INTEGER
  }, {});
  Item.associate = function(models) {
    Item.hasMany(models.TransactionItem, {foreignKey: "ItemId"})
    Item.hasMany(models.ItemTag, {foreignKey: "ItemId"})
  };
  return Item;
};