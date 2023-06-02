/*EL CONTROLLERS ES EL QUE HACE LA INTERACCION CON FUENTES EXTERNAS DE INFORMACION(API Y BDD)
 ES EL QUE SE COMUNICA CON ESTAS FUENTES DE INFO*/

const URL = "https://pokeapi.co/api/v2/pokemon";
const axios = require("axios");
const {Pokemon} = require("../db")

//findbypk --> trae por id los caracteres de un pokemon de la bdd
//__________________________________________________________________
//Debe funcionar tanto para los pokemones de la API como para los de la bdd
// este metodo nos ayuda acelerar la busqueda dentro de la base de datos
//_____________________________________________
//LLAMADO A API PARA OBTENER EL DETALLE DEL POKEMON
const getApiPokemonById= async (id)=>{
  const {data} = await axios(`${URL}/${id}`)
  if(data){
    let charactersPokemon={
      id: data.id,
      name: data.name,
      image: data.sprites.front_default,
      life: data.stats[0].base_stat,
      attack: data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
      speed: data.stats[5].base_stat,
      height: data.height,
      weight: data.weight,
      // types: data.types.map((tipo)=>tipo.type.name)
      types: data.types[1].type.name
      }  
      return charactersPokemon;
  }
  
}
//_____________________________________________
const getPokemonById = async (id, source)=>{

    const pokem = source === "API" ? getApiPokemonById(id)
     : await Pokemon.findByPk(id);
      return pokem;

}
module.exports= {
  getPokemonById
};
