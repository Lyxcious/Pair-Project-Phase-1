'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    timestamp: DataTypes.DATE,
    UserId: DataTypes.INTEGER
  }, {});
  Transaction.associate = function(models) {
    Transaction.belongsTo(models.User, {foreignKey: "UserId"})
    Transaction.hasMany(models.TransactionItem, {foreignKey: "TransactionId"})
  };
  return Transaction;
};