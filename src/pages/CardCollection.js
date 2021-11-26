import '../assets/css/style.css'
import { Col, Container, Row, Image, FormControl, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';

import Header from './header';
import char1 from '../assets/images/character/char1.png';
import char2 from '../assets/images/character/char2.png';
import char3 from '../assets/images/character/char3.png';
import char4 from '../assets/images/character/char4.png';
import char5 from '../assets/images/character/char5.png';
import char6 from '../assets/images/character/char6.png';
import char7 from '../assets/images/character/char7.png';
import char8 from '../assets/images/character/char8.png';
import char9 from '../assets/images/character/char9.png';
import bottom_line_style from '../assets/images/bottom_line_style.png';
import top_line_style from '../assets/images/top_line_style.png';
import box_style from '../assets/images/box_style.png';
// import refresh from '../assets/images/refresh.jpg';
import char_brand from '../assets/images/char_brand.png';
import cards from '../assets/images/cards1.png';
import reload from '../assets/images/reload.png';
// import dot_box from '../assets/images/dot-box.png';
import bottom_label from '../assets/images/bottom-label.png';
import search from '../assets/images/search.png';
import composition_icon from '../assets/images/composition_icon.png';
import decomposition_icon from '../assets/images/decomposition_icon.png';
import React, { useState, useEffect } from 'react'



export default function CardCollection() {

    let i = 0, j = 0;
    var campArr = [];

    useEffect(() => {

        fetch("http://3.138.38.80:4000/firework_update/api/cards_character/1", {

            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.data);
                document.getElementById('rank_value').innerHTML = "<b>" + data.data.charcter[0]['character_value'] + "/230</b>";
                for (i in data.data.rank) {
                    console.log(data.data.rank[i]);
                    document.getElementById('rank_data').innerHTML += "<option value=" + data.data.rank[i]["rank_id"] + ">" + data.data.rank[i]["rank_name"] + "</option>";
                }
                for (j in data.data.charcter) {
                    console.log(data.data.charcter[j]);
                    document.getElementById('character_data').innerHTML += "<option value=" + data.data.charcter[j]["character_id"] + " onClick = {handle} >" + data.data.charcter[j]["character_name"] + "</option>";

                }
            });
        document.getElementById('rank_data').innerHTML = "";
        document.getElementById('character_data').innerHTML = "";

        fetch("https://firework-ndm.herokuapp.com/api/getCamps", {
            method: 'GET',
        })
        .then(response => response.json())
        .then(data=>{
            console.log(data);
            if(data == null || data == undefined){
                campArr = [];
            }
            else{
                if(!data.status){
                    campArr = data.data;
                }
                else{
                    campArr = [];
                }
            }
        })

    }, [])




    const handleScorechange = () => {
        let rank_id = document.getElementById("rank_data").value;
        let character_id = document.getElementById("character_data").value;
        console.log(rank_id, character_id, 'rank and character');


        fetch("http://3.138.38.80:4000/firework_update/api/cards_value/" + rank_id + "/" + character_id, {

            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.data);
                for (i in data.data) {
                    console.log(data.data[i]);
                    document.getElementById('rank_value').innerHTML = "<b>" + data.data[i]['value'] + "/230</b>";

                }
            });
    }



    return (
        <div className="mainInterface_page">
            <Header></Header>
            <section>
                <Container fluid className="px-4 my-3 d-inline-block w-100">
                    <div className="characters_box">
                        <Row>
                            <Col xs="12" md="9">
                                <div className="characters_box_left">
                                    <Row>
                                        <Col xs="12" md="2">
                                            <div className="top_char_line">
                                                <Image src={box_style} fluid></Image>
                                            </div>
                                            <Link to="#" className="char_card">
                                                <Image src={char1} fluid className="char_img"></Image>
                                            </Link>
                                            <div className="botm_char_line">
                                                <Image src={bottom_line_style} fluid></Image>
                                            </div>
                                        </Col>
                                        <Col xs="12" md="2">
                                            <div className="top_char_line">
                                                <Image src={box_style} fluid></Image>
                                            </div>
                                            <Link to="#" className="char_card">
                                                <Image src={char2} fluid className="char_img"></Image>
                                            </Link>
                                            <div className="botm_char_line">
                                                <Image src={bottom_line_style} fluid></Image>
                                            </div>
                                        </Col>
                                        <Col xs="12" md="2">
                                            <div className="top_char_line">
                                                <Image src={box_style} fluid></Image>
                                            </div>
                                            <Link to="#" className="char_card">
                                                <Image src={char3} fluid className="char_img"></Image>
                                            </Link>
                                            <div className="botm_char_line">
                                                <Image src={bottom_line_style} fluid></Image>
                                            </div>
                                        </Col>
                                        <Col xs="12" md="2">
                                            <div className="top_char_line">
                                                <Image src={box_style} fluid></Image>
                                            </div>
                                            <Link to="#" className="char_card">
                                                <Image src={char4} fluid className="char_img"></Image>
                                            </Link>
                                            <div className="botm_char_line">
                                                <Image src={bottom_line_style} fluid></Image>
                                            </div>
                                        </Col>
                                        <Col xs="12" md="2">
                                            <div className="top_char_line">
                                                <Image src={box_style} fluid></Image>
                                            </div>
                                            <Link to="#" className="char_card">
                                                <Image src={char5} fluid className="char_img"></Image>
                                            </Link>
                                            <div className="botm_char_line">
                                                <Image src={bottom_line_style} fluid></Image>
                                            </div>
                                        </Col>
                                        <Col xs="12" md="2">
                                            <div className="top_char_line">
                                                <Image src={box_style} fluid></Image>
                                            </div>
                                            <Link to="#" className="char_card">
                                                <Image src={char6} fluid className="char_img"></Image>
                                            </Link>
                                            <div className="botm_char_line">
                                                <Image src={bottom_line_style} fluid></Image>
                                            </div>
                                        </Col>
                                        <Col xs="12" md="2">
                                            <div className="top_char_line">
                                                <Image src={top_line_style} fluid></Image>
                                            </div>
                                            <Link to="#" className="char_card">
                                                <Image src={char7} fluid className="char_img"></Image>
                                            </Link>
                                            <div className="botm_char_line">
                                                <Image src={box_style} fluid></Image>
                                            </div>
                                        </Col>
                                        <Col xs="12" md="2">
                                            <div className="top_char_line">
                                                <Image src={top_line_style} fluid></Image>
                                            </div>
                                            <Link to="#" className="char_card">
                                                <Image src={char8} fluid className="char_img"></Image>
                                            </Link>
                                            <div className="botm_char_line">
                                                <Image src={box_style} fluid></Image>
                                            </div>
                                        </Col>
                                        <Col xs="12" md="2">
                                            <div className="top_char_line">
                                                <Image src={top_line_style} fluid></Image>
                                            </div>
                                            <Link to="#" className="char_card">
                                                <Image src={char9} fluid className="char_img"></Image>
                                            </Link>
                                            <div className="botm_char_line">
                                                <Image src={box_style} fluid></Image>
                                            </div>
                                        </Col>
                                        <Col xs="12" md="2">
                                            <div className="top_char_line">
                                                <Image src={top_line_style} fluid></Image>
                                            </div>
                                            <Link to="#" className="char_card">
                                                <Image src={char1} fluid className="char_img"></Image>
                                            </Link>
                                            <div className="botm_char_line">
                                                <Image src={box_style} fluid></Image>
                                            </div>
                                        </Col>
                                        <Col xs="12" md="2">
                                            <div className="top_char_line">
                                                <Image src={top_line_style} fluid></Image>
                                            </div>
                                            <Link to="#" className="char_card">
                                                <Image src={char2} fluid className="char_img"></Image>
                                            </Link>
                                            <div className="botm_char_line">
                                                <Image src={box_style} fluid></Image>
                                            </div>
                                        </Col>
                                        <Col xs="12" md="2">
                                            <div className="top_char_line">
                                                <Image src={top_line_style} fluid></Image>
                                            </div>
                                            <Link to="#" className="char_card">
                                                <Image src={char4} fluid className="char_img"></Image>
                                            </Link>
                                            <div className="botm_char_line">
                                                <Image src={box_style} fluid></Image>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col xs="12" md="3">
                                <div className="characters_box_right">
                                    <div className="card_coll_inrf_right position-relative">
                                        <div className="card_detail_form">
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <Image src={cards} fluid className="crd_dtl_img"></Image>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Form.Group className="mb-0 btn_drpdwn" controlId="legend_field">
                                                        <Form.Select className="select_form_input" aria-label="Default select example" id="rank_data" onClick={handleScorechange}>

                                                            {/* <option value="1">one</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option> */}
                                                        </Form.Select>
                                                    </Form.Group>
                                                </li>
                                                <li className="list-inline-item">
                                                    <span className="card_level_txt" id="rank_value"></span>
                                                </li>
                                            </ul>
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <Image src={reload} fluid className="crd_dtl_img"></Image>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Form.Group className="mb-0 btn_drpdwn" controlId="legend_field">
                                                        <Form.Select className="select_form_input" aria-label="Default select example" id="character_data" onClick={handleScorechange}>
                                                        </Form.Select>
                                                    </Form.Group>
                                                </li>
                                                <li className="list-inline-item">
                                                    <span className="card_level_txt"><b>0/</b>0</span>
                                                </li>
                                            </ul>
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <Image src={search} fluid className="crd_dtl_img"></Image>
                                                </li>
                                                <li className="list-inline-item">
                                                    <div className="mb-0 card_search">
                                                        <FormControl
                                                            type="search"
                                                            placeholder="SEARCH FOR CARDS"
                                                            className="mr-2 card_search_field"
                                                            aria-label="Search"
                                                        />
                                                    </div>
                                                </li>
                                                <li className="list-inline-item"></li>
                                            </ul>
                                        </div>
                                        <div className="card_char_slider">
                                            <Carousel interval={null}>
                                                <Carousel.Item>
                                                    <Image src={char_brand} fluid></Image>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <Image src={char_brand} fluid></Image>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <Image src={char_brand} fluid></Image>
                                                </Carousel.Item>
                                            </Carousel>
                                        </div>
                                        <div className="card_char_slid_text">
                                            <p className="mb-0">asdasdasdasbdfkjgnbkjnsfjknbkfndvnz.snvkznvnzksndv. nskfjnkSKbfkbadsjbsdasdasda</p>
                                        </div>
                                        <div className="bottom-label">
                                            <ul className="list-inline btm_btn_links">
                                                <li className="list-inline-item">
                                                    <Image src={composition_icon} fluid className="btn_link_icon"></Image>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link to="/card-synthesis" className="btn_link_txt">Cards Composition</Link>
                                                </li>
                                                <Image src={bottom_label} fluid className="btm_lbl_btn_img" />
                                            </ul>
                                            <ul className="list-inline btm_btn_links mb-0">
                                                <li className="list-inline-item">
                                                    <Image src={decomposition_icon} fluid className="btn_link_icon"></Image>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link to="/card-synthesis" className="btn_link_txt">Cards Decomposition</Link>
                                                </li>
                                                <Image src={bottom_label} fluid className="btm_lbl_btn_img" />
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </div>

    )
};