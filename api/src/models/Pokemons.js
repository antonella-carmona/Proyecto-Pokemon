const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id:{
      type: DataTypes.UUID, //
      defaultValue: DataTypes.UUIDV4,  //
      allowNull: false, //no quiero que este campo este vacio
      primaryKey:true,
      
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagen:{
      type: DataTypes.STRING,
      allowNull: false,
     
    },
    vida:{
      type: DataTypes.STRING,
      allowNull: false
    },
    ataque:{
      type: DataTypes.STRING,
      allowNull: false
    },
    defensa:{
      type: DataTypes.STRING,
      allowNull: false
    },
    velocidad:{
      type: DataTypes.STRING,
      allowNull: false
    },
    altura:{
      type: DataTypes.STRING,
      allowNull: false
    },
    peso:{
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};
