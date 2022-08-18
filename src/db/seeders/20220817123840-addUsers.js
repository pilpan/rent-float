module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      email: 'plip2010195@yandex.ru',
      password: '$2b$10$R3UBQoSb1JyVfR5xY/fseuEvDqRTPvhDvFfVLuoiri5jsTG3UPhT6',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
