import axios from "axios";
import { GETALLPOKEMONS, GETBYNAMEBDD, GETBYID } from "../actionsTypes";


export const getAllPokemons= ()=>{
    return async (dispatch)=>{
        const response = await axios("http://localhost:3001/pokemons")
        return dispatch({
            type: GETALLPOKEMONS,
            payload: response.data
        })
    }
}

export const getByNameBdd = (name) =>{
    return async (dispatch)=>{
        const response = await axios(`http://localhost:3001/pokemons/?name=${name}`)
        return dispatch({
            type: GETBYNAMEBDD,
            payload: response.data
        })
    }
}

export const getById = (id)=>{
return async (dispatch)=>{
    const response = await axios(`http://localhost:3001/pokemons/${id}`);
    return dispatch({
        type: GETBYID,
        payload: response.data
    })
}
}
