'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports',[
      {
         name:'Mumbai International',
         cityId:16,
         createdAt:new Date(),
         updatedAt:new Date()
      },
      {
         name:'Chatrapati Shivaji',
         cityId:16,
         createdAt:new Date(),
         updatedAt:new Date()
      },
      {
         name:'Sahar International',
         cityId:16,
         createdAt:new Date(),
         updatedAt:new Date()
      },
      {
         name:'Indra Gandhi',
         cityId:1,
         createdAt:new Date(),
         updatedAt:new Date()
      },
    ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
