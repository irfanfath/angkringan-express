'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {

    static associate(models) {
      Transaction.belongsTo(models.Menu, { foreignKey: 'id', as: 'menus' });
    }
  };
  Transaction.init({
    menuId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'ApartmentId is required'
        },
        notEmpty: {
          args: true,
          msg: 'ApartmentId is required'
        },
        isInt: {
          args: true,
          msg: 'ApartmentId has to be an integer'
        }
      }
    },
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
    qty: DataTypes.INTEGER,
    tgl: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};