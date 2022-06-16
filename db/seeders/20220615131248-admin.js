const bcrypt = require('bcrypt');

'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    const superAdmin = [{
      email: 'admin@admin.com',
      name: 'admin',
      password: await bcrypt.hash('admin', 10),
      admin: true
    }]
    
    await queryInterface.bulkInsert('Users', superAdmin);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    queryInterface.bulkDelete('Users', null, {});
  }
};
