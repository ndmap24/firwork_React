import {BAUGHT_PACK, GETPACKS, COUNT_CARDS, REDIRECT, REDIRECTED, CLICKED, CLICK, OPENCARDS, OPEN_PAGE, BUY_PACK, SPARK_TREASURED_PACK, SPARK_CLASSICAL_PACK, SPARK_CAMP_PACK, SELECT_PACK, DISSELECT_PACK, PAY, PAID, ON_PAGE } from '../actions/types';
const imgArr = ['../assets/images/character/char1.png', '../assets/images/character/char2.png', '../assets/images/character/char3.png', '../assets/images/character/char4.png', '../assets/images/character/char5.png', '../assets/images/character/char6.png', '../assets/images/character/char7.png', '../assets/images/character/char8.png', '../assets/images/character/char9.png', '../assets/images/character/char11.png']

const initialState = {
    paid: false,
    clicked: false,
    charArr: [],
    ableToOpenPack: false,
    canRedirect: false,
    baughtPacks: {
        sparkTreasuerPacks : 0,
        sparkClassicPacks : 0,
        sparkCampPacks : 0
    },

    selectedCard: {
        value: 0,
        offer: "",
        quantity: 0,
        image: "",
        packName: ""
    },
    packs: []

}


export default function (state = initialState, action) {

    const { sparkTreasured, sparkClassical, sparkCamp, selectedCard } = state;
    const { type, payload } = action;
    console.log(payload);

    switch (type) {
        case SPARK_TREASURED_PACK:
            return {
                ...state,
                sparkTreasured: sparkTreasured + payload
            }
        case SPARK_CLASSICAL_PACK:
            return {
                ...state,
                sparkClassical: sparkClassical + payload
            }
        case SPARK_CAMP_PACK:
            return {
                ...state,
                sparkCamp: sparkCamp + payload
            }
        case SELECT_PACK:
            return {
                ...state,
                selectedCard: payload

            }
        case DISSELECT_PACK:
            return {
                ...state,
                selectedCard: {
                    value: 0,
                    offer: "",
                    quantity: 0,
                    image: ""

                },
            }
        case BUY_PACK:
            console.log(payload);
            const cardType = payload.packType

            switch (cardType) {
                case "sparkTreasured":
                    return {
                        ...state,
                        sparkTreasured: {
                            ...sparkTreasured,
                            cards: payload.pack
                        }
                    }
                case "sparkClassical":
                    return {
                        ...state,
                        sparkClassical: {
                            ...sparkClassical,
                            cards: payload.pack
                        },
                    }
                case "sparkCamp":
                    return {
                        ...state,

                        sparkCamp: {
                            ...sparkCamp,
                            cards: payload.pack

                        }

                    }


            }
        case PAY:
            return {
                ...state,
                paid: true
            }
        case PAID:
            return {
                ...state,
                ableToOpenPack: false,
                paid: false,
                selectedCard: {
                    ...selectedCard,
                    value: 0,
                    offer: "",
                    quantity: 0
                },

            }
        case ON_PAGE:
            console.log(payload);
            return {
                ...state,
                selectedCard: {
                    ...selectedCard,
                    packName: payload.pageName,
                    image: payload.image
                }
            }
        case OPEN_PAGE:
            return {
                ...state,
                ableToOpenPack: true

            }
        case OPENCARDS:
            
            switch (payload.packName) {
                case "sparkTreasured":
                    return {
                        ...state,
                        sparkTreasured: {
                            ...sparkTreasured,
                            cards: payload.cards
                        }

                    }
                case "sparkClassical":
                    return {
                        ...state,
                        sparkClassical: {
                            ...sparkClassical,
                            cards: payload.cards
                        }
                    }
                case "sparkCamp":
                    return {
                        ...state,
                        sparkCamp: {
                            ...sparkCamp,
                            cards: payload.cards
                        }
                    }
            }
        case CLICK:
            return {
                ...state,
                clicked: true
            }
        case CLICKED:
            return {
                ...state,
                clicked: false

            }
        case REDIRECT:
            return {
                ...state,
                canRedirect: true
            }
        case REDIRECTED:
            return {
                ...state,
                canRedirect: false
            }
        case COUNT_CARDS:
            const data = (Object.values(payload.arr));
            console.log(data);
            
            return{
                ...state,
                charArr : [...data]
            }
        case GETPACKS:
            return {
                ...state,
                packs: payload
            }
        case BAUGHT_PACK:
            return{
                ...state,
                baughtPacks : payload
            }


        default:
            return state




    }


}





















 

    // sparkTreasured: {
    //     card1: {
    //         value: 168,
    //         info: "*Spark Collection Card Pack is limited to two purchases per address!",
    //         offer: "1 package"
    //     }
    // },
    // sparkClassical: {
    //     card1: {
    //         value: 10,
    //         info: "",
    //         offer: "1 pack"

    //     },
    //     card2: {
    //         value: 20,
    //         info: "",
    //         offer: "2 packs"
    //     }, card6: {
    //         value: 60,
    //         info: "",
    //         offer: "6 packs"
    //     }, card11: {
    //         value: 100,
    //         info: "Exclusive Package",
    //         offer: "10 get 1 free"
    //     }, card22: {
    //         value: 200,
    //         info: "Supreme Package",
    //         offer: "20 get 2 free"
    //     }
    // },
    // sparkCamp: {
    //     card1: {
    //         value: 35,
    //         info: "",
    //         offer: "1 pack"

    //     },
    //     card2: {
    //         value: 70,
    //         info: "",
    //         offer: "2 packs"
    //     }, card6: {
    //         value: 210,
    //         info: "",
    //         offer: "6 packs"
    //     }, card11: {
    //         value: 350,
    //         info: "Exclusive Package",
    //         offer: "10 get 1 free"
    //     }
    // }


