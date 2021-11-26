import {BAUGHT_PACK, SELECT_PACK, DISSELECT_PACK } from "./types";
import axios from "axios";

export const selectPack = (data) => dispatch =>{
        const {value,offer,quantity,image,packName} = data;

        dispatch({
            type : SELECT_PACK,
            payload :{
                value,
                offer,
                quantity,
                image,
                packName
            }
        })

}

export const disSelectPack = () => dispatch =>{

    dispatch({
        type : DISSELECT_PACK
    })
}


export const boughtPacksa = () => async(dispatch) =>{
    const res = await axios.get('http://localhost:5000/getpacks/count')
    dispatch({
      type : BAUGHT_PACK,
      payload : res.data[0]
    })
    
}