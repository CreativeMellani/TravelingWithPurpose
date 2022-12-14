const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Searched extends Model {}

Searched.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Country: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'US',
    },
    desciption: {
      type: DataTypes.STRING,
    },
    date_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'searched',
  }
);

module.exports = Searched;
