'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    static associate(models) {
      // define association here
    }
  }
  City.init({
    name:{ 
    type:DataTypes.STRING,
    allowNull:false
  }
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};
