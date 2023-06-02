const {Pokemon, Type} = require("../db")

//vamos a querer crearlo con el modelo traido , utilizando un metodo de sequelize
//create, crea un objeto que tiene las especificaciones del prototipo de pokemon(models)
const createPokemonBD= async (name, image, life, attack, defense, speed, height, weight, created, types)=>{
   const newPokemon= await Pokemon.create({
     name,
     image,
     life,
     attack,
     defense,
     speed,
     height,
     weight,
     created
    });

  //   let pokemonTypes = await Type.findAll({
  //     where: { name: types }
  // })
  // newPokemon.addType(pokemonTypes);
    
     return newPokemon;
} 



module.exports= createPokemonBD;

//-----------------------------------

// const createPokemonBD = async (name, image, life, attack, defense, speed, height, weight, created, TypeIds) => {
//   const newPokemon = await Pokemon.create({
//     name,
//     image,
//     life,
//     attack,
//     defense,
//     speed,
//     height,
//     weight,
//     created,
//   });

//   if (Array.isArray(TypeIds)) {
//     for (let i = 0; i < TypeIds.length; i++) {
//       const typeId = TypeIds[i];
//       const typeInstance = await Type.findByPk(typeId);
//       if (typeInstance) {
//         await newPokemon.addType(typeInstance);
//       }
//     }
//   }

//   return newPokemon;
// };

module.exports = createPokemonBD;


  // if (Array.isArray(TypeId)) {
    //   for (let i = 0; i < TypeId.length; i++) {
    //     const typeInstance = await Type.findOrCreate({ where: { name: TypeId[i] } });
    //     await newPokemon.addType(typeInstance[0]);
    //   }
    // }



  //   const pokemonTypes = await Type.findAll({
  //     where: { name: types }
  // })
  //await newPokemon.addType(pokemonTypes); //asociacion