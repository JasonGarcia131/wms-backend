'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('UccBarcodes', {
      fields: ['location_id'],
      type: 'foreign key',
      name: 'uccbarcode_location_association',
      references: {
        table: 'locations',
        field: 'location_id'
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
