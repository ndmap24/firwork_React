import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import CardImg from '../assets/images/character/char6.png';
import { connect } from 'react-redux';


 function SingleCard({imgArr}) {
     const image = require("../assets/images/character/"+imgArr[0]).default
    return (
        <>
            <Row>
                <Col lg={12}>
                    <div className="single_card_page">
                        <Image className="single_card_img" src={image} />
                    </div>
                </Col>
            </Row>
        </>
    )
}
const mapStateToprops = state =>({
    imgArr : state.packs.charArr,
})

export default connect(mapStateToprops) (SingleCard)