'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Customer.init({
    customer_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    customer_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ship_to: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sold_to: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sales_rep: {
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
    modelName: 'Customer',
    tableName: 'customers',
    underscored: true,
    timestamps: true
  });
  return Customer;
};