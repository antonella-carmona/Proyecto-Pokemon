import style from './card.module.css';
import { Link } from 'react-router-dom'


function Card({pokem}) {

 const {name, image, types, id} = pokem
    console.log(pokem)

  return (
    <div className={style.contenedorCard}>
      <img src={image} alt="" width='200px' height='200px' />

      <div className={style.contenedorName}>
      <h3>{name}</h3>
      <h5 >Type: {types}</h5>
      <Link to={`/home/${id}`}>  
      {/* <button className={style.btn}>Mas detalles...</button> */}
      Mas detalles...
      </Link>
      </div>
    </div>
  );
}

export default Card;