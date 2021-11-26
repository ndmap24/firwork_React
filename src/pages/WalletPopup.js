import React from "react";
import { Modal, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";

import { Redirect } from "react-router";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { buyPack, pay } from "../actions/packs1";

function WalletPopup({ paid, pay, buyPack, show, handleClose, handleShow, packType, quantity, packsClassical, packsCamp, packsTreasured }) {

    const onClick = () => {

        switch (packType) {
            case "sparkTreasured":
                buyPack({ pack1: quantity, pack2: packsTreasured, packType })
                pay()
                break
            case "sparkClassical":
                buyPack({ pack1: quantity, pack2: packsClassical, packType })
                pay()
                break
            case "sparkCamp":
                buyPack({ pack1: quantity, pack2: packsCamp, packType })
                pay()
                break
        }
    }
    if (paid) {
        switch (packType) {
            case "sparkClassical":
        
                 return <Redirect to="/interstellar_trader_classical" />
            case "sparkTreasured":
                return <Redirect to="/interstellar_trader_treasured"/>
            case "sparkCamp":
                return <Redirect to="/interstellar_trader_camp" />


        }
    }
    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button> */}

            <Modal show={show} onHide={handleClose} centered>
                <Container className="wallet_popup_container">
                    <Row>
                        <div className="wallet_popup_div">
                            <Modal.Header onClick={handleShow} closeButton>
                                <Modal.Title>Wallet</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>User Deposit Operation</Modal.Body>
                            {/* <Modal.Footer>sparkClassical
                                <Button variant="secondary" onClick={props.handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={props.handleClose}>
                                    Save Changes
                                </Button>
                            </Modal.Footer> */}
                            <Link onClick={onClick}>
                                Buy Now
                            </Link>
                        </div>
                    </Row>
                </Container>
            </Modal>
        </>
    );
}

//   render(<WalletPopup />);

WalletPopup.propTypes = {
    quantity: PropTypes.number,
    packsClassical: PropTypes.number,
    packsCamp: PropTypes.number,
    packsTreasured: PropTypes.number,
    buyPack: PropTypes.func.isRequired,
    pay: PropTypes.func.isRequired,

}


const mapStateToprops = (state) => ({
    packType: state.packs.selectedCard.packName,
    quantity: state.packs.selectedCard.quantity,
    packsClassical: state.packs.baughtPacks.sparkClassicPacks,
    packsCamp: state.packs.baughtPacks.sparkCampPacks,
    packsTreasured: state.packs.baughtPacks.sparkTreasuerPacks,
    paid: state.packs.paid

})


export default connect(mapStateToprops, { buyPack, pay })(WalletPopup)