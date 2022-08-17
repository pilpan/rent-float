module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('favorites', [{
      id_user: 1,
      id_flat: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('favorites', null, {});
  },
};
