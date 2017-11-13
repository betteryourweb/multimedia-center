'use strict'
module.exports = (sequelize, DataTypes) => {
  var File = sequelize.define('File', {
    name: DataTypes.STRING,
    path: DataTypes.STRING,
    size: DataTypes.INTEGER,
    type: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    }
  })
  return File
}
