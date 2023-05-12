const { Router } = require('express');
// Importar todos los routers;
const {getPokemonById} = require("../controllers/getPokemonById");


const router = Router();

// Configurar los routers
router.get('/pokemons/:id', (req, res)=>{
    getPokemonById(req,res)
});




module.exports = router;
