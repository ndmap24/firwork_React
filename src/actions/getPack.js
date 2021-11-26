import axios from "axios";
import { GETPACKS } from "./types";

export const getPacks = () => async(dispatch) =>{
    try {
        console.log("i'm on get packs file");

        const res = await axios.get('http://localhost:5000/getpacks/info')
        dispatch({
            type : GETPACKS,
            payload : res.data
        })
    } catch (err) {
        console.error(err);
        console.log('no packs available');
    }
}
