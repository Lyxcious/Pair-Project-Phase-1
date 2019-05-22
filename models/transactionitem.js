'use strict';
module.exports = (sequelize, DataTypes) => {
  const TransactionItem = sequelize.define('TransactionItem', {
    TransactionId: DataTypes.INTEGER,
    ItemId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {});
  TransactionItem.associate = function(models) {
    TransactionItem.belongsTo(models.Transaction, {foreignKeys: "TransactionId"})
    TransactionItem.belongsTo(models.Item, {foreignKey: "ItemId"})
  };
  return TransactionItem;
};