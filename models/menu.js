'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    static associate(models) {
      Menu.hasMany(models.Transaction, { foreignKey: 'menuId'});
    }
  };
  Menu.init({
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Nama Menu is required'
        },
        notEmpty: {
          args: true,
          msg: 'Nama Menu is required'
        },
        isInt: {
          args: true,
          msg: 'Nama Menu has to be an integer'
        }
      }
    },
    harga: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'harga is required'
        },
        notEmpty: {
          args: true,
          msg: 'harga is required'
        }
      }
    },
    stock: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Menu',
  });
  return Menu;
};