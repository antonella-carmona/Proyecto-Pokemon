import style from './navbar.module.css';


function Navbar({handlerChange, handleSubmit}) {
  return (
    <div className={style.searchBox}>
      <form onChange={handlerChange}>
        <input type='text' placeholder="Busqueda"/>
        <button type='submit' onClick= {handleSubmit}>Buscar</button>
      </form>
    </div>
  );
}

export default Navbar;