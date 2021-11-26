import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import LeftArrow from '../assets/images/interstellar-page/left_arrow.png';
import Pack from '../assets/images/interstellar-page/pack-1.png';
// import Subtraction from '../assets/images/interstellar-page/Subtraction.png';
// import SupremePack from '../assets/images/interstellar-page/supreme-pack.png';
import { Link } from 'react-router-dom';
import Brand from '../assets/images/char_brand.png';
import TimeLeft from '../assets/images/interstellar-page/clock-icon.png';
import DivideBar from '../assets/images/interstellar-page/divide-bar.png';
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Redirect } from "react-router";
import { selectPack } from "../actions/selectPack";


function CardShop({ card1, card2, card6, card11, card22, selectedCard, selectPack }) {

    const [selectedCard1, setSelectedCared1] = useState(selectedCard)

    const onClick = (e) => {
        // e.preventDefault();
        const cardId = e.currentTarget.id;
        console.log(cardId);

        switch (cardId) {
            case 'card1':
                setSelectedCared1({
                    ...selectedCard1,
                    value: card1.value,
                    offer: card1.offer,
                    quantity: 1,
                    image: "/static/media/package_grey.f8534de5.png",
                    packName : "sparkClassical"
                })
                break
            case 'card2':
                setSelectedCared1({
                    ...selectedCard1,
                    value: card2.value,
                    offer: card2.offer,
                    quantity: 2,
                    image: "/static/media/package_grey.f8534de5.png",
                    packName : "sparkClassical"
                })
                break
            case 'card6':
                setSelectedCared1({
                    ...selectedCard1,
                    value: card6.value,
                    offer: card6.offer,
                    quantity: 6,
                    image: "/static/media/package_grey.f8534de5.png",
                    packName : "sparkClassical"
                })
                break
            case 'card11':
                setSelectedCared1({
                    ...selectedCard1,
                    value: card11.value,
                    offer: card11.offer,
                    quantity: 11,
                    image: "/static/media/package_grey.f8534de5.png",
                    packName : "sparkClassical"
                })
                break
            case 'card22':
                setSelectedCared1({
                    ...selectedCard1,
                    value: card22.value,
                    offer: card22.offer,
                    quantity: 22,
                    image: "/static/media/package_grey.f8534de5.png",
                    packName : "sparkClassical"
                })
                break
        }

    }

    if (selectedCard1.value !== 0) {
        selectPack(selectedCard1)

    }

    if (selectedCard.value !== 0) {
        return <Redirect to='/confirm_goods' />
    }


    return (
        <>
            <div className="card_shop_page">
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
                                    <h2>Spark Classical Pack</h2>
                                    <div className="cardShop_rightTop">
                                        <div className="">
                                            <Link to="/interstellar_trader_classical">
                                                <Image className="left_arrow_img" src={LeftArrow} fluid />
                                            </Link>
                                        </div>
                                        <div className="rightTop_para">Choose the number you want to purchase.</div>
                                    </div>
                                </Col>
                                <Row className="cs_left_side_div">
                                    {/* <div className="cs_left_side_div"> */}
                                    <Col lg={8}>
                                        <div className="cs_left_part1">
                                            <Row className="cardShop_pack_div">
                                                {/* <div className="cardShop_pack_div"> */}
                                                <Col lg={4}>
                                                    <Link className="pack_link" id="card1" onClick={(e) => (e)}>
                                                        <div className="pack_div">
                                                            <Image className="pack_img" src={Pack} />
                                                            <div className="bottom_div">
                                                                <div className="secOne">
                                                                    <span>{card1.offer}</span>
                                                                </div>
                                                                <div className="secTwo">
                                                                    <span className="quantity_num">{card1.value}</span>
                                                                    <span className="u">U</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </Col>
                                                <Col lg={4}>
                                                    <Link className="card2 pack_link" id="card2" onClick={(e) => onClick(e)} >
                                                        <div className="pack_div">
                                                            <div className="quantity">x <span className="pack_number" id="txt_val" value="2">2</span></div>
                                                            <Image className="pack_img" src={Pack} />
                                                            <div className="bottom_div">
                                                                <div className="secOne">
                                                                    <span>{card2.offer}</span>
                                                                </div>
                                                                <div className="secTwo">
                                                                    <span className="quantity_num">{card2.value}</span>
                                                                    <span className="u">U</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </Col>
                                                <Col lg={4}>
                                                    <Link className="pack_link" id="card6" onClick={(e) => onClick(e)}>
                                                        <div className="pack_div">
                                                            <div className="quantity">x <span className="pack_number">6</span></div>
                                                            <Image className="pack_img" src={Pack} />
                                                            <div className="bottom_div">
                                                                <div className="secOne">
                                                                    <span>{card6.offer}</span>
                                                                </div>
                                                                <div className="secTwo">
                                                                    <span className="quantity_num">{card6.value}</span>
                                                                    <span className="u">U</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </Col>
                                                {/* </div> */}
                                            </Row>
                                            <Col lg={12}>
                                                <Link className="exclusive_href" id="card11" onClick={(e) => onClick(e)}>
                                                    <div className="exclusive_pack_div">
                                                        <div className="exc_label"><span>Send 1 Package</span></div>
                                                        <div className="exc_pac_top">
                                                            <div className="exc_pac_txtDiv">
                                                                {card11.info}
                                                            </div>
                                                            <Image className="exc_pacImg" src={Pack} />
                                                            <div className="exc_pac_numDiv">
                                                                x  11
                                                            </div>
                                                        </div>
                                                        <div className="bottom_div">
                                                            <div className="secOne">
                                                                <span>{card11.offer}</span>
                                                            </div>
                                                            <div className="secTwo">
                                                                <span className="quantity_num">{card11.value}</span>
                                                                <span className="u">U</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>

                                            <Col lg={12}>
                                                <Link className="supreme_href" id="card22" onClick={(e) => onClick(e)}>
                                                    <div className="supreme_pack_div">
                                                        <div className="exc_label"><span>Send 2 Package</span></div>
                                                        <div className="sup_pac_top">
                                                            <div className="sup_pac_txtDiv">
                                                                {card22.info}
                                                            </div>
                                                            <div className="sup_pac_numDiv">
                                                                x 22
                                                            </div>
                                                        </div>
                                                        <div className="bottom_div">
                                                            <div className="secOne">
                                                                <span>{card22.offer}</span>
                                                            </div>
                                                            <div className="secTwo">
                                                                <span className="quantity_num2">{card22.value}</span>
                                                                <span className="u">U</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
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


CardShop.propTypes = {
    card1: PropTypes.object.isRequired,
    card2: PropTypes.object.isRequired,
    card6: PropTypes.object.isRequired,
    card11: PropTypes.object.isRequired,
    card22: PropTypes.object.isRequired,
    selectPack: PropTypes.func.isRequired,
}

const mapStateToprops = (state) => ({
    card1: state.packs.packs[1].packs.card1,
    card2: state.packs.packs[1].packs.card2,
    card6: state.packs.packs[1].packs.card6,
    card11: state.packs.packs[1].packs.card11,
    card22: state.packs.packs[1].packs.card22,
    selectedCard: state.packs.selectedCard
})

export default connect(mapStateToprops, { selectPack })(CardShop)

