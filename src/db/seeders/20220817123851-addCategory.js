module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('flatCategories', [{
      categorie: 'House',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      categorie: 'Rooms',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('flatCategories', null, {});
  },
};
