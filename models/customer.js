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
    static associate({SalesOrder}) {
      // define association here
      this.hasMany(SalesOrder, {
        foreignKey: 'customer_id',
        onDelete: 'cascade'
      })
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
    sold_to: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sales_rep: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Customer',
    tableName: 'customers',
    underscored: true,
    timestamps: false
  });
  return Customer;
};