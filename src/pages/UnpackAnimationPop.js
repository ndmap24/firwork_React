import React from 'react'
import { Container, Row, Modal, Button } from 'react-bootstrap'
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Redirect } from 'react-router';
import { clicked, click} from '../actions/packs1';
import { countCards } from '../actions/packs1';
import { boughtPacksa } from '../actions/selectPack';

function UnpackAnimationPop({pack,boughtPacksa,countCards,imgArr, clicked, campCard, classicCard, treasureCard, click, show, handleClose, card, isClicked, packName }) {
    
    boughtPacksa()
    
    switch (packName) {
        case "sparkTreasured":
            if (treasureCard === 0 && isClicked) {
                console.log("treasureCard",treasureCard);
                return <Redirect to="/interstellar_trader_treasured" />
            } else if (isClicked) {
                return <Redirect to="/open_package" />
            }
            break

        case "sparkClassical":
            if (classicCard === 0 && isClicked) {
                return <Redirect to="/interstellar_trader_classical" />
            } else if (isClicked) {
                return <Redirect to="/open_package" />
            }
            break

        case "sparkCamp":
            if (campCard === 0 && isClicked) {
                
                return <Redirect to="/interstellar_trader_camp" />
            } else if (isClicked) {
                return <Redirect to="/open_package" />
            }
            
    }


    const onClick = () => {

        switch(packName){
            case "sparkClassical":
                countCards({cards : classicCard })
    
                break
            case "sparkCamp":
                countCards({cards : campCard })
    
                break
            case "sparkTreasured":
                countCards({cards : treasureCard })
    
                break
             }

        click()

       
    }

    return (
        <>
            <Modal className="unpacking_anmtn" show={show} onHide={handleClose} centered>
                {/* <Modal.Header closeButton></Modal.Header> */}

                <Button className="btn close_btn_card" onClick={onClick}>X</Button>
                <div className="card_show_popup">
                    <Container className="">
                        <Modal.Body>{card} </Modal.Body>
                    </Container>
                </div>
            </Modal>
        </>
    )
}

UnpackAnimationPop.propTypes = {
    click: PropTypes.func.isRequired,
    isClicked: PropTypes.bool.isRequired,
    packName: PropTypes.string.isRequired,
    campCard: PropTypes.number.isRequired,
    classicCard: PropTypes.number.isRequired,
    treasureCard: PropTypes.number.isRequired,
    clicked: PropTypes.func.isRequired,
    countCards : PropTypes.func.isRequired,
    imgArr : PropTypes.array.isRequired,
    boughtPacksa : PropTypes.func.isRequired,


}


const mapStateToprops = state => ({
    isClicked: state.packs.clicked,
    packName: state.packs.selectedCard.packName,
    campCard : state.packs.baughtPacks.sparkCampPacks,
    classicCard : state.packs.baughtPacks.sparkClassicPacks,
    treasureCard : state.packs.baughtPacks.sparkTreasuerPacks,
    imgArr : state.packs.charArr,
    

})
export default connect(mapStateToprops, {boughtPacksa, click, clicked, countCards })(UnpackAnimationPop)