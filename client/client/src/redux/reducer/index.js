import { GETALLPOKEMONS, GETBYNAMEBDD, GETBYID } from "../actionsTypes";

let inicialState= {
    allPokemons: [],
    pokemons: [],
    detail: [],
    types: []
   
}

const rootReducer= (state= inicialState, action)=>{
  switch(action.type){

    case GETALLPOKEMONS:  return {
      ...state,
      pokemons: action.payload,
      allPokemons: action.payload
  }
    case GETBYNAMEBDD: return{
      ...state,
      pokemons : action.payload
    }

    case GETBYID: return{
      ...state,
      detail: action.payload
    }




    default: return {...state}
  }
}

export default rootReducer;