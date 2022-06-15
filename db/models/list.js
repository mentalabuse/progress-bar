'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class List extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
      this.belongsTo(User, {foreignKey: 'user_id'})
    }
  }
  List.init({
    user: DataTypes.STRING,
    mentor: DataTypes.STRING,
    ch1: DataTypes.BOOLEAN,
    ch2: DataTypes.BOOLEAN,
    ch3: DataTypes.BOOLEAN,
    ch4: DataTypes.BOOLEAN,
    ch5: DataTypes.BOOLEAN,
    ch6: DataTypes.BOOLEAN,
    ch7: DataTypes.BOOLEAN,
    ch8: DataTypes.BOOLEAN,
    ch9: DataTypes.BOOLEAN,
    ch10: DataTypes.BOOLEAN,
    ch11: DataTypes.BOOLEAN,
    ch12: DataTypes.BOOLEAN,
    mates: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'List',
  });
  return List;
};
