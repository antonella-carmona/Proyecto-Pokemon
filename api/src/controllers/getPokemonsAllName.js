const URL = "https://pokeapi.co/api/v2/pokemon";
const axios = require("axios");
const {Pokemon } = require("../db") //models


//METODOS DE SEQUELIZE USADOS
//create() ->  se utiliza para crear un nuevo registro a un models en la bdd. Permite crear una instancia del modelo correspondiente y guardarla en la base de datos.
//findAll() -> devuelve una promesa que se resuelve con un array de todos los registros de la tabla, trae a todos del model que le pedimos.
//{where:{}}  <-- va a buscar
const bringAllPokemonsApi = async ()=>{
    const {data} = await axios.get(`${URL}`);
   
    
    const response= Promise.all( 
      data.results.map(async (pok) =>{
        const  secundReponse = await axios.get(pok.url);

        const mapApi= {
        id: secundReponse.data.id,
        name: pok.name,
        life: secundReponse.data.stats[0].base_stat,
        attack: secundReponse.data.stats[1].base_stat,
        defense: secundReponse.data.stats[2].base_stat,
        speed: secundReponse.data.stats[5].base_stat,
        height: secundReponse.data.height,
        weight: secundReponse.data.weight,
        image: secundReponse.data.sprites.other['official-artwork'].front_default,
        types: secundReponse.data.types.map((tipo)=>tipo.type.name),
        created: false // <-- para validar lo que viene de la BDD con lo que viene de la api
      }
      return  mapApi; 
      
    })
    )
    return response;
  
  
}

//_____________________________________________

const getPokemonsName = async (name)=>{
   const allPokemons = await bringAllPokemonsApi();
   const pokemonFilteredApi = allPokemons.filter( (pokem) => pokem.name===name)
    
  
    const pokemonFilteredBD = await Pokemon.findAll({
      where:{name: name}
    }) 
   return [...pokemonFilteredApi, ...pokemonFilteredBD]
}
//____________________________________________________
const getPokemonsAll= async ()=>{
  
  const responseBd= await Pokemon.findAll();

  const responseApi = await bringAllPokemonsApi(); 

  return [...responseBd, ...responseApi];
}


  module.exports= {
    getPokemonsName,
    getPokemonsAll,
    bringAllPokemonsApi
  };
