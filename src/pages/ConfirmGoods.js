import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from 'react-router-dom';
import LeftArrow from '../assets/images/interstellar-page/left_arrow.png';
import Package from '../assets/images/interstellar-page/package-grey.png';
import WalletPopup from "./WalletPopup";
import { useState } from 'react'
import DivideBar from '../assets/images/interstellar-page/divide-bar.png';

import { PropTypes } from "prop-types";
import { connect } from "react-redux";

import { disSelectPack } from "../actions/selectPack";
import BuyUsdtButton from "./BuyUsdtButton"
// meta mask


 function ConfirmGoods({selectedCard,disSelectPack}) {
    const history = useHistory()
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const goBack =  () =>{
        disSelectPack()
        history.goBack()

    } 

    
    return (
        
        <>
            {/* <div className="ConfirmGoods_page"> */}
                <WalletPopup show = {show} setShow = {setShow} handleClose = {handleShow} handleClose = {handleClose}/>
                <Container fluid>
                    <Row>
                        <Col lg={4} className="confirmGoods_col">

                            <div className="cardShop_page_lft">
                                <h2>Card Pack Introduction：</h2>
                                <ul>
                                    <li>Unlimited sales</li>
                                    <li>Random camp card for <span className="yellow">legendary</span>, <span className="blue">epic</span>, <span className="dodgerBlue">rare</span> and
                                        <span className="grey"> common</span> ( gold and silver cards are not included)
                                    </li>
                                    <li>A staking card and two gaming cards</li>
                                    <li>60% Card Opening Rate: <span className="yellow">Legendary</span> 5%, <span className="blue">Epic</span> 10%,
                                        <span className="dodgerBlue">Rare</span> 25%, <span className="grey">Common</span> 60%
                                    </li>
                                    <li>When the cards in the starship belong to the camp,
                                        you can receive a total combat power bonus for 5%
                                        buff.
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={1}>
                            <Image className="divide-bar" src={DivideBar} fluid/>
                        </Col>
                        <Col lg={7}>
                            <div className="confirmGoods_div">
                                <h2 className="cg_head_txt">Confirm your Goods</h2>
                                <div className="cardShop_rightTop">
                                    <Link className="" onClick = {goBack}>
                                      
                                            <Image className="left_arrow_img" src={LeftArrow} fluid />
                                        
                                    </Link>
                                    <div className="rightTop_para">{selectedCard.offer}</div>
                                </div>
                                <div className="cg_pack_div">
                                    <Image className="cg_pack_img" src={selectedCard.image} />
                                    <span className="cg_pack_times">X</span>
                                    <span className="cg_pack_quantity">{selectedCard.quantity}</span>
                                </div>
                                <BuyUsdtButton />
                                {/* <a className="cg_buyBtn_href" href="javascript:;" onClick={handleShow}>
                                    <div className="cg_pack_buy_btn col-lg-8 col-md-8 col-sm-8">
                                        <div className="cg_buyBtn_txt">Buy in USDT</div>
                                        <div className="cg_buyBtn_right">{selectedCard.value} <span className="cg_pack_u">U</span></div>
                                    </div>
                                </a> */}
                            </div>
                        </Col>
                    </Row>
                </Container>
            {/* </div> */}
        </>
    )
};

ConfirmGoods.propTypes = {
    selectedCard : PropTypes.object.isRequired,
    value : PropTypes.number.isRequired,
    offer : PropTypes.string.isRequired,
    quantity : PropTypes.number.isRequired,
    image : PropTypes.string.isRequired,

}


const mapStateToprops = (state) =>({
    selectedCard : state.packs.selectedCard
})
export default connect(mapStateToprops,{disSelectPack}) (ConfirmGoods)

