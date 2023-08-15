'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Inventory.init({
    inventory_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    sku_number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dimensions: {
      type: DataTypes.STRING,
      allowNull: true
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    case_pack: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updated_at: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Inventory',
    tableName: 'inventories',
    underscored: true,
    timestamps: true
  });
  return Inventory;
};