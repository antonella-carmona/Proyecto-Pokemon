const URL = "https://pokeapi.co/api/v2/pokemon?limit=100";
const axios = require("axios");
const express = require("express")
//__________________________________________________________________


const getPokemonById = async (req,res)=>{
  try {
    const {id} = req.params;
    
    const {data} = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`)
    
    if(!data.name) throw new Error (`Faltan los personajes con ID: ${id}`)
   console.log(data.results)
    const character={
      id: data.id,
      name: data.name,
      imagen: data.sprites.front_default,
      vida: data.stats[0].base_stat,
      ataque: data.stats[1].base_stat,
      defensa: data.stats[2].base_stat,
    //   velocidad: data.,
    //   altura: data.results.altura,
      peso: data.peso

    }
   return res.status(200).json(character)

}
catch (error) {
return error.message.includes("ID")
? res.status(404).send(error.message)
: res.status(500).send(error.response.data.error)
}
 
}

module.exports= {
  getPokemonById
};