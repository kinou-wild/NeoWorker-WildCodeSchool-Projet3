'use strict';

const bcrypt = require('bcryptjs');

module.exports = {


  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('users', [{
        role: 'admin',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('password', bcrypt.genSaltSync(10)),
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
