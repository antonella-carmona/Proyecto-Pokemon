const { DataTypes, sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
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
    image:{
      type: DataTypes.STRING,
      allowNull: false,
     
    },
    life:{
      type: DataTypes.STRING,
      allowNull: false
    },
    attack:{
      type: DataTypes.STRING,
      allowNull: false
    },
    defense:{
      type: DataTypes.STRING,
      allowNull: false
    },
    speed:{
      type: DataTypes.STRING,
      allowNull: false
    },
    height:{
      type: DataTypes.STRING,
      allowNull: false
    },
    weight:{
      type: DataTypes.STRING,
      allowNull: false
    },
    created:{
    type: DataTypes.BOOLEAN,
    defaultValue: true
    }
  },
 {timestamps: false}
  );
};
