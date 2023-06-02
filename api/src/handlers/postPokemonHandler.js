const createPokemonBD = require("../controllers/postPokemon");


// recibimos info por body para crear
const postPokemonHandler = async (req, res)=>{
  try {
    const {name, image, life, attack, defense, speed, height, weight, created, types}= req.body;
    const response= await createPokemonBD(name, image, life, attack, defense, speed, height, weight, created, types)
    

   return res.status(200).json(response)
  } catch (error) {
   return res.status(400).json({error:error.message})
  }

  
  //   res.status(200).send(`Esta ruta recibirá todos los datos necesarios para crear un pokemon y relacionarlo
  //   con sus tipos solicitados.
  //  Toda la información debe ser recibida por body.
  //  Debe crear un pokemon en la base de datos, y este debe estar relacionado con sus tipos indicados
  //  debe poder relacionarse al menos con dos.`)
}

module.exports= {
  postPokemonHandler
}

