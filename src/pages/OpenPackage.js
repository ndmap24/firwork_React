import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Package from '../assets/images/interstellar-page/package-grey.png'
import { useState,useEffect } from 'react'
import UnpackAnimationPop from "./UnpackAnimationPop";
import SingleCard from "./SingleCard";
import Swiper from "./Swiper";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { openPacks,clicked } from "../actions/packs1";
import { Redirect } from "react-router";
import { redirect } from "../actions/packs1";
import { boughtPacksa } from "../actions/selectPack";
import { countCards } from "../actions/packs1";
 function OpenPackage({countCards,boughtPacksa,canRedirect,redirect,clicked,openPacks, pack,image,campCard,classicCard,treasureCard}) {
    clicked()

    let card ;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => {

        setShow1(true)
        handleClose()
    };

    useEffect(()=>{

      switch(pack){
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
      
    },[])


    switch(pack){
        case "sparkClassical":
            card = classicCard
            // countCards({cards : card })

            break
        case "sparkCamp":
            card = campCard
            // countCards({cards : card })

            break
        case "sparkTreasured":
            card =  treasureCard
            // countCards({cards : card })

            break
           }
    const openOne = () =>{
        clicked()
        openPacks({
            packName:pack,
            cards : card-1

        })
    }
    const openAll = () =>{


        openPacks({
            packName:pack,
            cards : 0

        })
    }
    const goBack = ()=> {
        console.log("go back");
        redirect()
    }
    if(canRedirect ){
        switch (pack){
            case "sparkClassical":
                return <Redirect to="/interstellar_trader_classical" />
            case "sparkTreasured":
                return <Redirect to="/interstellar_trader_treasured" />
            case "sparkCamp":
                return <Redirect to="/interstellar_trader_camp" />

        }
    }

    
    
    return (

        <div className="open_package_popup">
            <UnpackAnimationPop show={show} setShow={setShow} handleClose={handleShow} handleClose={handleClose} card={<SingleCard/>}/>
            <UnpackAnimationPop show={show1} setShow={setShow1} handleShow1={handleShow1} handleClose={handleClose1} card={<Swiper/>}/>
            <Container>
                <Row>
                    <Col lg={12}>
                        <button onClick={goBack} className="opn_pckg_back">X</button>
                        <div className="open_package_page">
                            <div className="open_package_imgDiv">
                                <Image className="op_package_img" src={image} />
                            </div>
                            <div className="open_package_pageBtm">
                                <a href="javascript:;" onClick={()=> {handleShow(); openOne()}} className="open_package_nextBtn col-lg-3">
                                    <div className="op_nextBtn_left">Open for the next</div>
                                    <div className="op_nextBtn_right">x 1</div>
                                </a>
                                <a href="javascript:;" onClick={()=>{handleShow1(); openAll() }} className="open_package_allBtn col-lg-3">
                                    <div className="op_allBtn_left">Open for all</div>
                                    <div className="op_allBtn_right">x {card}</div>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};
OpenPackage.propTypes = {
    pack: PropTypes.string.isRequired,
    image : PropTypes.string.isRequired,
    campCard : PropTypes.number.isRequired,
    classicCard : PropTypes.number.isRequired,
    treasureCard : PropTypes.number.isRequired,
    openPacks : PropTypes.func.isRequired,
    clicked : PropTypes.func.isRequired,
    redirect : PropTypes.func.isRequired,
    canRedirect : PropTypes.func.isRequired,
    boughtPacksa : PropTypes.func.isRequired,
    countCards : PropTypes.func.isRequired,

}

const mapStateToprops = (state)=>({
    pack : state.packs.selectedCard.packName,
    image : state.packs.selectedCard.image,
    campCard : state.packs.baughtPacks.sparkCampPacks,
    classicCard : state.packs.baughtPacks.sparkClassicPacks,
    treasureCard : state.packs.baughtPacks.sparkTreasuerPacks,
    canRedirect : state.packs.canRedirect

})

export default connect(mapStateToprops,{countCards,boughtPacksa,redirect,openPacks,clicked})(OpenPackage)


