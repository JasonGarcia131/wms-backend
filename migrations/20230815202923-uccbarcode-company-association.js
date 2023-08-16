'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('UccBarcodes', {
      fields: ['company_id'],
      type: 'foreign key',
      name: 'uccbarcode_company_association',
      references: {
        table: 'companies',
        field: 'company_id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
