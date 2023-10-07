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
    static associate({Company, Customer}) {
      // define association here
      this.belongsTo(Company, {
        foreignKey: 'company_id'
      });
      this.belongsTo(Customer, {
        foreignKey: "customer_id"
      });
    }

  }
  SalesOrder.init({
    salesorder_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
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
    ship_to: {
      type: DataTypes.STRING,
      allowNull: false
    },
    company_id: {
      type: DataTypes.INTEGER,
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'SalesOrder',
    tableName: 'salesOrders',
    underscored: true,
    timestamps: false
  });
  return SalesOrder;
};