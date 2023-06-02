import { useState } from 'react';
import { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux"
//________________________________________
import {getAllPokemons, getByNameBdd} from "../../redux/actions/index"
import NavBar from '../../componentesLogicas/navbar/navbar';
import Cards from '../../componentesLogicas/cards/cards';
import style from './home.module.css';

function Home() {
  //dispatch comunica-> envia algo a la store->reducer
  const dispatch = useDispatch();
  //quiero que estes suscrito/atento a cualquier cambio que suceda a este estado global de reducer
  const allPokemons = useSelector((state)=> state.pokemons);
  const [searchString, setSearchString] = useState(""); //<-- manjea estado input

  const handlerChange = (evento)=>{ // <-- fn que agarra contenido del input
    evento.preventDefault();// <-- para que no se refresque la pagina
    setSearchString(evento.target.value);
 }

 const handleSubmit= (evento)=>{ //<-- fn click boton del input
  evento.preventDefault();
  dispatch(getByNameBdd(searchString))
}
  /* filtro sobre el estado global
  const [filtered, setFiltered] = useState(allPokemons); //<-- filtrado names
  const [searchString, setSearchString] = useState(""); //<-- manjea estado input

  const handlerChange = (evento)=>{ // <-- fn que agarra contenido del input
     evento.preventDefault();// <-- para que no se refresque la pagina
     setSearchString(evento.target.value);
  }

  const handleSubmit= (evento)=>{ //<-- fn click boton del input
    evento.preventDefault();
  const filtered= allPokemons.filter( pokem => 
    pokem.name.includes(searchString));
    setFiltered(filtered);
  }*/
  //filtro con el backend


  //por medio del useEfect si queremos que nuestra pag se carge al momento del mount(montaje) le,
  //vamos a decir a dispatch que despache esta fn de actions para que llegue al reducer
  useEffect(()=>{
    dispatch(getAllPokemons())
    /*  cuando se desmonta mi componente home(se desmonta al momento de hacer click en otro lado)
    la limpiamos
    return (()=>{
      clearDetails()
    })   */


  },[dispatch])






  return (
    <div className={style.contenedorHome}>
      
      <h2 className={style.titleHome}>Home</h2>
      <NavBar handlerChange= {handlerChange} handleSubmit={handleSubmit}/>
      {/* mandar por props/parametro al componente cards */}
      <Cards allPokemons={allPokemons}></Cards>
    </div>
  );
}

export default Home;