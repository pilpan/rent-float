'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class flat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.user, { foreignKey: 'id_user' });
      this.hasMany(models.flatCategories, { foreignKey: 'id_category' });
      this.belongsTo(models.favorite,{foreignKey:"id_flat"})
    }
  }
  flat.init({
    price: DataTypes.INTEGER,
    descriptions: DataTypes.STRING,
    img: DataTypes.STRING,
    coordinate: DataTypes.STRING,
    id_user: DataTypes.INTEGER,
    id_category: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'flat',
  });
  return flat;
};