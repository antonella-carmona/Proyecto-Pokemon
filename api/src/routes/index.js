const { Router } = require('express');
//_________________________________________________________________
//CONTROLLERS
// const {getPokemonById} = require("../controllers/getPokemonById");
// const {getPokemonsAll } = require("../controllers/getPokemonsAll");
// const {getPokemonsName} = require("../controllers/getPokemonsName")
//_______________________________________________________________
//HANDLERS
const {postPokemonHandler} = require("../handlers/postPokemonHandler")
const {getPokemonsHandler, pokemonById, typePokemon} = require("../handlers/getPokemonHandlers")
//_______________________________________________________________
// Importar todos los routers;
//Si la app a desarrollar es muy grande se podria modularizar cada ruta!
//Por el momento al tener estas 4 rutas lo hacemos en este archivo principal!
const router = Router();


// Configurar los routers
//_____________________________________________________________________________//

router.get('/pokemons', getPokemonsHandler);
//aca estarian todos los usuarios/pokemons y por name
//_____________________________________________________________________________//

router.get('/pokemons/:id', pokemonById);
//detalle usuario/pokemon
//____________________________________________________________________________//

router.post('/pokemons', postPokemonHandler);
//para crear un pokemon y relacionarlo con sus tipos solicitados
//____________________________________________________________________________//
//tipos pokemons
router.get('/type', typePokemon);



module.exports = router;
