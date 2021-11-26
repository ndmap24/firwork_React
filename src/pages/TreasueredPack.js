import React, {useState} from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import LeftArrow from '../assets/images/interstellar-page/left_arrow.png';
import Pack from '../assets/images/interstellar-page/pack-1.png';
// import Subtraction from '../assets/images/interstellar-page/Subtraction.png';
// import SupremePack from '../assets/images/interstellar-page/supreme-pack.png';
import { Link } from 'react-router-dom';
import Brand from '../assets/images/char_brand.png';
import TimeLeft from '../assets/images/interstellar-page/clock-icon.png';
import DivideBar from '../assets/images/interstellar-page/divide-bar.png';
import PurplePack from '../assets/images/interstellar-page/purple-pack.png';
import { selectPack } from "../actions/selectPack";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";


function TreasurePack({card1,selectedCard,selectPack}) {

    const [selectedCard1, setSelectedCared1] = useState(selectedCard)

    
    const onClick = (e) => {
        // e.preventDefault();
        const cardId = e.currentTarget.id;
        setSelectedCared1({
            ...selectedCard1,
            value: card1.value,
            offer: card1.offer,
            quantity: 1,
            image: "/static/media/treasured-pack.9f5087e9.png",
            packName : "sparkTreasured"

        })
        
    }
    if (selectedCard1.value !== 0) {
        console.log(selectedCard1.value);
        selectPack(selectedCard1)

    }
    console.log(selectedCard.value);

    if (selectedCard.value !== 0) {
        return <Redirect to='/confirm_goods' />
    }


    return (
        <>
            <div className="treasure_pack_page">
                <Container fluid>
                    <Row>
                        <Col lg={4} className="cardShop_lft_col">
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
                            <Image className="divide-bar" src={DivideBar} fluid />
                        </Col>
                        <Col lg={7}>
                            <div className="cardShop_page_right">
                                <Col lg={12}>
                                    <h2>Spark Treasured Pack</h2>
                                    <div className="cardShop_rightTop">
                                        <div className="">
                                            <Link to="/interstellar_trader_treasured">
                                                <Image className="left_arrow_img" src={LeftArrow} fluid />
                                            </Link>
                                        </div>
                                        <div className="rightTop_para">Choose the number you want to purchase.</div>
                                    </div>
                                </Col>
                                <Row className="cs_left_side_div">
                                    {/* <div className="cs_left_side_div"> */}
                                    <Col lg={7}>
                                        <Link className="purple_pack_link" id = "card1" onClick={e=>onClick(e)}>
                                            <div className="treasure_pack_div">
                                                <Image className="purple-pack" src={PurplePack} fluid />
                                                <div className="treasure_content">
                                                    <span className="treasure_txt_head">Spark Collection Card Holder</span>
                                                    <span className="treasure_txt_para">{card1.info}</span>
                                                </div>
                                                <div className="treasure_quantity_div">
                                                    <div className="treasure_quant_lft">
                                                       {card1.offer}
                                                    </div>
                                                    <div className="treasure_quant_rgt">
                                                        <span className="treasure_quantity">{card1.value}</span>
                                                        <span className="treasure_unit">U</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </Col>
                                    <Col lg={5}>
                                        <div className="cs_left_part2">
                                            <div className="cs_left_partDiv">
                                                <Image className="brand_bg" src={Brand} />
                                                <div className="cs_left_partPara">
                                                    <Image className="time_left" src={TimeLeft} />
                                                    <span>16 Days  12 Hours  45 Minutes</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    {/* </div> */}
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}


TreasurePack.propTypes={
    card1 : PropTypes.object.isRequired,
    selectPack: PropTypes.func.isRequired,

}

const mapStateToprops=(state)=>({
    card1: state.packs.packs[0].packs.card1,
    selectedCard: state.packs.selectedCard

})

export default connect(mapStateToprops,{selectPack})(TreasurePack)
