//el handler se encarga de recibir la request
//unificar
//devolver respuesta *
//invoca al controller *
//el handler NUNCAA interactua con fuentes externas de info(api y bdd)--> esto lo maneja el controller que es otra fn simple y sencillo

const { getPokemonById } = require("../controllers/getPokemonById");
const { getPokemonsName, getPokemonsAll } = require("../controllers/getPokemonsAllName");
const {getPokemonsNameType,  getTypePokemons} = require("../controllers/getPokemonsType")


//COMO TRAEMOS/RECIBIMOS INFO?
// params --> id si modifica ruta de la url
//query --> no modifica la ruta original -->?name=name&raza=raza
//body --> DESDE UNA URL por endponit

//___________________________________________________________________________________________
const getPokemonsHandler= async (req, res)=>{
    //esta fn hace 2 cosas trae todo(idmmm) y trae por query
    const {name} = req.query;
    try {
    //llamo a mi controlador y le paso lo que me traje de query
    if(name) {
        const response= await getPokemonsName(name)
      return  res.status(200).json(response)
    } else{
        const secondeResp= await getPokemonsAll()
      return  res.status(200).json(secondeResp);
    }

    } catch (error) {
     return   res.status(400).json({error: error.message})
    }
    /*res.status(200).send(`Obtiene un arreglo de objetos, donde cada objeto es un pokemon con su información.
    TAMBIEN: Esta ruta debe obtener todos aquellos pokemons que coinciden con el nombre recibido por query.`)*/
} 
//______________________________________________________________________________________________
//detalle usuario/pokemon
// id --> utiliza params 
//que tipo de id voy a traer? BDD o API? 
// " ygtr6474636-yftdy735ft-857hsgr-947vsr " <--BDD llega en forma de string
// 1 / 2/ 5 / 8  <-- API number integer
const pokemonById = async (req, res)=>{
    const {id} = req.params;
    const source = isNaN(id) ? "BDD" : "API"
    
    try {
      const response = await getPokemonById(id, source)

    return  res.status(200).json(response)
    } catch (error) {
     return   res.status(400).json({error: error.message})
    }




   /* res.status(200).send(`Esta ruta obtiene el detalle de un pokemon específico. Es decir que 
    devuelve un objeto con la información pedida en el detalle de un pokemon.
    El pokemon es recibido por parámetro (ID).
    Tiene que incluir los datos del tipo de pokemon al que está asociado.
    Debe funcionar tanto para los pokemones de la API como para los de la base de datos.`)*/
}
//________________________________________________________________________________________________
//tipo pokemons
const typePokemon= async (req, res)=>{
      
    try {
        const pokeTypes = await getTypePokemons()
    return res.status(200).json(pokeTypes)
    } catch (error) {
      return  res.status(400).json({error: error.message})
    }
    // res.status(200).send("Obtiene un arreglo con todos los tipos de pokemones.")
}
//___________________________________________________________________________________________________

module.exports= {
    getPokemonsHandler,
    pokemonById,
    typePokemon
}