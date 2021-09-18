module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        validate: {
          len: [0, 50],
        },
        allowNull: false,
      },

      name: {
        type: DataTypes.STRING,
        validate: {
          len: [0, 50],
        },
        allowNull: false,
      },

      password: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 100],
        },
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      birthday: {
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "User",
    }
  );

  return User;
};
