'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OperatorInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OperatorInfo.init({
    operatorName: DataTypes.STRING,
    rarityStar: DataTypes.INTEGER,
    operatorArcheType: DataTypes.STRING,
    operatorCost: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OperatorInfo',
    tableName: 'operatorInfo'
  });
  return OperatorInfo;
};