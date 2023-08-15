'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UccBarcode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Company}) {
      // define association here
      this.belongsTo(Company)
    }
  }
  UccBarcode.init({
    barcode_id: {
      type: DataTypes.Integer,
      primaryKey: true,
      autoIncrement: true
    },
    sku_number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    color: {
      type: DataTypes.STRING,
      allowNull: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    company_id: {
      type: DataTypes.STRING,
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
    modelName: 'UccBarcode',
    tableName: 'uccbarcodes',
    underscored: true,
    timestamps: true
  });
  return UccBarcode;
};