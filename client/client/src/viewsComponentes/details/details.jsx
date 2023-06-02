import { getById } from '../../redux/actions';
import './details.module.css';
import { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux"
import Card from '../../componentesLogicas/card/card';
//despachar una actions 
 //por medio del useEfect si queremos que nuestra pag se carge al momento del mount(montaje) le,
  //vamos a decir a dispatch que despache esta fn de actions para que llegue al reducer
  


function Details({pokem}) {

  // const {name, image, types, id, life, attack, defense, speed, height, weight} = pokem

  const detailPokemo= pokem 
  const dispatch = useDispatch();
  const getbyid = useSelector((state)=> state.detail);


  useEffect(()=>{
    dispatch(getById())
    /*  cuando se desmonta mi componente home(se desmonta al momento de hacer click en otro lado)
    la limpiamos
    return (()=>{
      clearDetails()
    })   */
  },[dispatch])
  return (
    <div >
      {/* <h2>Id:{id}</h2>
       <img src={image} alt="" width='200px' height='200px' />
       <h2>{name}</h2>
      <h2>Type: {types}</h2>
      <h2>{life}</h2>
      <h2>{attack}</h2>
      <h2>{defense}</h2>
      <h2>{speed}</h2>
      <h2>{height}</h2>
      <h2>{weight}</h2> */}
      
       {/* <Card getbyid={getbyid}></Card> */ }
       {detailPokemo?.map(detail=>{
        <Card
        image={detail.image}
        name={detail.name}
        type= {detail.types}
        life={detail.life}
        attack={detail.attack}
        defense={detail.defense}
        speed={detail.speed}
        height={detail.height}
        weight={detail.weight}
        />
       })}
    </div>
  );
}

export default Details;