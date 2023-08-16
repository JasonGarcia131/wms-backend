'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SalesOrder extends Model {
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
  SalesOrder.init({
    salesorder_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    sales_rep: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ship_date:{ 
      type: DataTypes.DATE,
      allowNull: false
    },
    ship_via: {
      type: DataTypes.STRING,
      allowNull: true
    },
    order_date:{ 
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Date.now()
    },
    company_id: {
      type: DataTypes.INTEGER,
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    modelName: 'SalesOrder',
    tableName: 'salesorders',
    underscored: true,
    timestamps: true
  });
  return SalesOrder;
};