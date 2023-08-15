'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('salesOrders', {
      salesorder_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sales_rep: {
        type: Sequelize.STRING,
        allowNull: true
      },
      ship_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      ship_via: {
        type: Sequelize.STRING,
        allowNull: true
      },
      order_date: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Date.now()
      },
      company_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      customer_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('salesOrders');
  }
};