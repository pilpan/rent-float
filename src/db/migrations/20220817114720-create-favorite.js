module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('favorites', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
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
      id_flat: {
        type: Sequelize.INTEGER,
        references: {
          model: 'flats', // к кому привязываем (к главному)
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
    await queryInterface.dropTable('favorites');
  },
};
