const { Type } = require("../db") //models
const axios = require("axios")
const {bringAllPokemonsApi} = require("../controllers/getPokemonsAllName")

//-->todas las consultas a la bdd son asyncronicas promise --> async/await
//----
//posteos metodos creacion
//traer  o delete metodos finders
//put/modificar metodos updaters-> actualizadores
//----
//utilizamos query--> 
//findOrCreate ->combina la funcionalidad de búsqueda y creación en una sola operación y al final larag un booleano
//create -> para crear en la bdd
//build y save
//bulkCreate ->crea multiples informacion juntas en un [{}]

//utlizamos finders -->
//findAll-> busca y devuelve todo lo que encuentre en la tabla especificada 
//findOne -> busca y devuelve el primer registro que encuentre con las condic especificadas
//findByPk -> busca y devuelve un registro con el id especific

//utilizamos updaters (value, opcional)-->
//acualiza los registros que cumplen con las condiciones specifi en los valores
//updateUser
//update->solo modifica forma clasic

//utilizamos deleters-->
//nos permite eliminar un unico registro de alguna de las tablas de nuestra bd
//destroy -> destruye todo la tabla/models (ojo aca indicar where osea donde o a cual)
//truncate()

//utilizamos operators -->
//el objeto Op se utiliza para realizar operaciones avanzadas y personalizadas
//permite la creacion de condicionales mas complejas en las consultas a la bdd
//se puede utilizar para filtros
// Post.findAll({
//     where: {
//       [Op.and]: [{ a: 5 }, { b: 6 }],            // (a = 5) AND (b = 6)
//       [Op.or]: [{ a: 5 }, { b: 6 }]
//     }
// })  

//utilizamos getters y setters -->
//GETTERS
//es una fn que esta dentro de la definicion de un models, esta fn se suele ocupar en el caso de getters(get()) para obtener info que le pasemos.
//va de la mano con type: Sequelize.VIRTUAL
//SETTERS
//tambien va en la definicion de un models, su uso es para validar/transformar/setear
//el valor antes de guardarlo en la bdd.

//utlizar hooks-->
//son fn que se ejecutan automaticamente dentro de la definicion de un models.


const getTypePokemons = async () =>{
   
    const typesDb = await Type.findAll(); 
  
    if(!typesDb.length){
       
    return typesDb
    } else{
        const {data} = await axios(`https://pokeapi.co/api/v2/type`);
    
    const response = Promise.all(
          data.results.map(async (p) => {
        const tipos= await Type.findOrCreate({
            where: { name: p.name }
        })
         return tipos;  
               
          
        })
    )
    return response;
    }

    //-----------------------
//     const typesDb = await Type.findAll(); //<-- traeme todos los registros que tiene esta tabla-models

//    const allPokemons = await bringAllPokemonsApi();
//    pokeTypeFiltrado= allPokemons.filter( (typo) => typo.types === "types")
    
    
//   return [...pokeTypeFiltrado, ...typesDb]
}
// console.log(getTypePokemons())

// const getPokemonsNameType = async ()=>{
//    // const typesDb = await Type.findAll(); //<-- traeme todos los registros que tiene esta tabla-models

//     const allPokemons = await getTypePokemons();
    
    
//     return allPokemons
// }

module.exports= {
    // getPokemonsNameType
    getTypePokemons
}
