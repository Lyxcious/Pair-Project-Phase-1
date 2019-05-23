'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    timestamp: DataTypes.DATEONLY,
    UserId: DataTypes.INTEGER
  }, {});

  Transaction.getTotal = (price, quantity) => {
    return price * quantity
  }

  Transaction.associate = function(models) {
    Transaction.belongsTo(models.User, {foreignKey: "UserId"})
    Transaction.belongsToMany(models.Item, { through: models.TransactionItem })
  };
  return Transaction;
}