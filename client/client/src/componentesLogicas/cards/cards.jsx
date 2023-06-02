import style from './cards.module.css';

import Card from "../card/card";


function Cards({allPokemons}) {

 const listPokemons= allPokemons

  return (
    <div className={style.contenedorCards}>
      {/* esta es la cards contenedor de card de todas */}
      {listPokemons?.map(pokem=>
        <Card pokem={pokem}/>
      )}
    </div>
  );
}

export default Cards;