module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('flats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      descriptions: {
        type: Sequelize.STRING,
      },
      img: {
        type: Sequelize.STRING,
      },
      coordinate: {
        type: Sequelize.STRING,
      },
      id_user: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users', // к кому привязываем (к главному)
          key: 'id',
        },
        onDelete: 'cascade', // если удалим производителя начинок, он удалит все начинки,
        allowNull: false,
      },
      id_category: {
        type: Sequelize.INTEGER,
        references: {
          model: 'flatCategories', // к кому привязываем (к главному)
          key: 'id',
        },
        onDelete: 'cascade', // если удалим производителя начинок, он удалит все начинки,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('flats');
  },
};
