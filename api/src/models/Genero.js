const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('genero', {
    id: {
      type: DataTypes.UUID,
      defaultValues: DataTypes.UUIDV4,
      primaryKey: true

    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   
  });
};
