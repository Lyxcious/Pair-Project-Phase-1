'use strict';
module.exports = (sequelize, DataTypes) => {
  const TransactionItem = sequelize.define('TransactionItem', {
    TransactionId: DataTypes.INTEGER,
    ItemId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {});
  TransactionItem.associate = function(models) {
  };
  return TransactionItem;
};