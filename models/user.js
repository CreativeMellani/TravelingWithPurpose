const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");
const bcrypt = require("bcrypt");
class User extends Model {
  checkPassword(PWinput) {
    return bcrypt.compareSync(PWinput, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [10],
      },
    },
    },
    {
        hooks: {
            beforeCreate: async (newData) => {
              newData.password = await bcrypt.hash(newData.password, 10);
              return newData;
            },
            beforeUpdate: async (updatedData) => {
              updatedData.password = await bcrypt.hash(updatedData.password, 10);
              return updatedData;
            },
        },
        sequelize,
        freezeTableName: true,
        underscore: true,
        modelName: "user",
        timestamp: false,
    }
);

module.exports = User;
