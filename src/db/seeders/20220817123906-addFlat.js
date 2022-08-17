module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('flats', [{
      price: 100000,
      descriptions: 'Квартира за 100к двух комнатная',
      img: 'https://icdn.lenta.ru/images/2019/06/28/11/20190628113347728/pwa_list_rect_1024_b4e76126a0237fee60da2f58649742ba.jpg',
      coordinate: 'ул.Цветной бульвар дом 2,стр2',
      id_user: 1,
      id_category: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('flats', null, {});
  },
};
