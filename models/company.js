'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({salesorder, uccbarcode}) {
      // define association here
      this.hasMany(salesorder);
      this.belongsTo(salesorder,  {foreignKey: 'company_id'})
      this.hasMany(uccbarcode);
      this.belongsTo(uccbarcode, {foreignKey: 'company_id'})
    }
  }
  Company.init({
    company_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    company_name: {
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
    modelName: 'Company',
    tableName: 'companies',
    underscored: true,
    timestamps: true
  });
  return Company;
};