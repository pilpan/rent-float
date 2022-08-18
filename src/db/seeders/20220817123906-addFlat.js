module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('flats', [
      {
        price: 100000,
        descriptions: 'Просторная двухкомнатная квартира',
        img: 'https://icdn.lenta.ru/images/2019/06/28/11/20190628113347728/pwa_list_rect_1024_b4e76126a0237fee60da2f58649742ba.jpg',
        coordinate: 'Москва, ул.Цветной бульвар дом 2,стр2',
        id_user: 1,
        id_category: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        price: 120000,
        descriptions: 'Квартира-студия в стиле лофт',
        img: 'https://dekodiz.ru/wp-content/uploads/2020/04/loft-interier-v-moskve-artway-15.jpg',
        coordinate: 'Москва, ул. Молодежная дом 17',
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
