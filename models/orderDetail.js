'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({SalesOrder}) {
      // define association here
      this.belongsTo(SalesOrder, {
        foreignKey: 'salesorder_id'
      });
    }
  }
  OrderDetail.init({
    order_details_id: {
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
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    salesorder_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'OrderDetail',
    tableName: 'orderDetails',
    underscored: true,
    timestamps: false
  });
  return OrderDetail;
};