import React, { useEffect } from 'react';
import { Image } from 'react-bootstrap';
// import CardImg4 from '../assets/images/character/char3.png';
// import CardImg5 from '../assets/images/character/char4.png';
// import CardImg6 from '../assets/images/character/char5.png';
// import CardImg7 from '../assets/images/character/char6.png';
// import CardImg8 from '../assets/images/character/char7.png';
// import CardImg10 from '../assets/images/character/char8.png';
// import CardImg11 from '../assets/images/character/char9.png';
// import CardImg3 from '../assets/images/character/char11.png';
import CoverFlow from 'coverflow-react';
import { connect } from 'react-redux';
import { PropTypes } from "prop-types";
import { countCards } from '../actions/packs1';


function Swiper({ countCards, imgArr, campCard, classicCard, treasureCard, packName }) {



    const imagesArr12 = imgArr.map(img => require("../assets/images/character/" + img).default)

    return (
        <>
            <CoverFlow imagesArr={imagesArr12}
                direction="horizontal"
                width="1200"
                height="300"
                itemRatio="10:10"
                background="#010102"
            />
        </>
    )
}

Swiper.propTypes = {
    packName: PropTypes.string.isRequired,
    campCard: PropTypes.number.isRequired,
    classicCard: PropTypes.number.isRequired,
    treasureCard: PropTypes.number.isRequired,
    imgArr: PropTypes.array.isRequired,
    countCards: PropTypes.func.isRequired,

}

const mapStateToprops = state => ({
    packName: state.packs.selectedCard.packName,
    campCard: state.packs.baughtPacks.sparkCampPacks,
    classicCard: state.packs.baughtPacks.sparkClassical,
    treasureCard: state.packs.baughtPacks.sparkTreasured,
    imgArr: state.packs.charArr

})

export default connect(mapStateToprops)(Swiper)