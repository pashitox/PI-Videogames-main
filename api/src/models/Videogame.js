const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValues: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripción: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Fechadelanzamiento: {
      type: DataTypes.STRING,
      allowNull: false,
      allowNull: false,
    },
    rating: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    plataformas: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
