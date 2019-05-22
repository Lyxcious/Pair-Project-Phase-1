'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    timestamp: DataTypes.DATEONLY,
    UserId: DataTypes.INTEGER
  }, {});
  Transaction.associate = function(models) {
    Transaction.belongsTo(models.User, {foreignKey: "UserId"})
    Transaction.belongsToMany(models.Item, { through: models.TransactionItem }, {foreignKey: "TransactionId"})
  };
  return Transaction;
}