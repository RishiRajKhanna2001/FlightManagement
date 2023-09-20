'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    static associate(models) {
      // define association here
      this.belongsTo(models.City,{
        foreignKey:'cityId',
        onDelete:'CASCADE'
      })
    }
  }
  Airport.init({
    name:{
      type:DataTypes.STRING,
      allowNull:false
    },
    address: DataTypes.STRING,
    cityId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Airport',
  });
  return Airport;
};


