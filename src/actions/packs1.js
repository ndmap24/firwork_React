import { COUNT_CARDS, REDIRECT, REDIRECTED, CLICK, CLICKED, OPENCARDS, OPEN_PAGE, ON_PAGE, PAY, BUY_PACK, SPARK_TREASURED_PACK, SPARK_CLASSICAL_PACK, SPARK_CAMP_PACK, PAID } from "./types";
import axios from "axios";

export const buyPack = ({ pack1, pack2, packType }) => async dispatch => {
    const pack = pack1 + pack2
    console.log(packType);

    const data = {

        number: pack,
        packageType: packType

    }
    const formData = JSON.stringify(data)

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const res = await axios.put('http://localhost:5000/packs/update', formData, config)
    if (res.status == 200) {

        dispatch({
            type: BUY_PACK,
            payload: {
                pack,
                packType
            }
        })
    } else {
        dispatch({

            type: BUY_PACK,
            payload: {
                pack: pack1,
                packType
            }

        })
    }
}

export const pay = () => dispatch => {
    dispatch({
        type: PAY
    })
}

export const paid = () => dispatch => {
    dispatch({
        type: PAID
    })
}


export const onPage = ({ pageName, image }) => dispatch => {

    dispatch({
        type: ON_PAGE,
        payload: { pageName, image }
    })


}


export const openPack = () => dispatch => {
    dispatch({
        type: OPEN_PAGE
    })
}


export const openPacks = ({ packName, cards }) => async dispatch => {

    const data = {

        number: cards,
        packageType: packName

    }
    const formData = JSON.stringify(data)

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const res = await axios.put('http://localhost:5000/packs/update', formData, config)

    dispatch({
        type: OPENCARDS,
        payload: {
            packName,
            cards
        }
    })

}


export const clicked = () => dispatch => {
    dispatch({
        type: CLICKED
    })
}


export const click = () => dispatch => {
    dispatch({
        type: CLICK
    })
}


export const redirect = () => dispatch => {
    dispatch({
        type: REDIRECT
    })
}


export const redirected = () => dispatch => {
    dispatch({
        type: REDIRECTED
    })
}

export const countCards = ( {cards} ) => async (dispatch) => {
    try {
        console.log("cards0",cards);
      
        
    const data = {
        cards 
    }
    const formData = JSON.stringify(data)

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }


        
    const res = await axios.post('http://localhost:5000/get/cards', formData, config)
    dispatch({
            type: COUNT_CARDS,
            payload : (res.data)
        })

    } catch (err) {
        console.log('error aya hai char array me ');
        console.error(err);
    }


}

