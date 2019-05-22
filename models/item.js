'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    itemName: DataTypes.STRING,
    itemDesc: DataTypes.TEXT,
    price: DataTypes.INTEGER
  }, {});
  Item.associate = function(models) {
    Item.belongsToMany(models.Transaction, { through: models.TransactionItem }, {foreignKey: "ItemId"})
    Item.belongsToMany(models.Tag, { through: models.ItemTag }, {foreignKey: "ItemId"})
  };
  return Item;
};