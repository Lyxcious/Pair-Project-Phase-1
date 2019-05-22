'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    tagName: DataTypes.STRING
  }, {});
  Tag.associate = function(models) {
    Tag.hasMany(models.ItemTag, {foreignKey: "TagId"})
  };
  return Tag;
};