import React from 'react';
import '../assets/css/style.css'
import { Col, Container, Row, Image, FormControl, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';

import Header from './header';
// import refresh from '../assets/images/refresh.jpg';
import char_brand from '../assets/images/char_brand.png';
import cards from '../assets/images/cards1.png';
import reload from '../assets/images/reload.png';
// import dot_box from '../assets/images/dot-box.png';
import bottom_label from '../assets/images/bottom-label.png';
import search from '../assets/images/search.png';
import composition_icon from '../assets/images/composition_icon.png';

import package_grey from '../assets/images/interstellar-page/package_grey.png';
import storage_box_item from '../assets/images/storage_box_item.png';

export default function Storage() {
    return (
        <div className="mainInterface_page">
            <Header></Header>
            <section>
                <Container fluid className="px-4 my-3 d-inline-block w-100">
                    <div className="characters_box">
                        <Row>
                            <Col xs="12" md="9">
                                <div className="storage_box_left">
                                    <Row>
                                        <Col xs="12" md="4" className="m-0 p-0">
                                            <div className="storg_boxe_effect">
                                                <div className="storg_boxes">
                                                    <Image src={package_grey} fluid className="storage_pack_img"></Image>
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item">
                                                            <p className="stry_pro_name">Ordinary booty box</p>
                                                            <div className="strg_box_qunty">
                                                                <Image src={storage_box_item} fluid className="strg_qnty_img"></Image>
                                                                <p className="mb-0"> x <span>10</span></p>
                                                            </div>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <Link to="#" className="storg_open_btn">Open Now</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </Col>
                                    
                                        <Col xs="12" md="4" className="m-0 p-0">
                                            <div className="storg_boxe_effect">
                                                <div className="storg_boxes">
                                                    <Image src={package_grey} fluid className="storage_pack_img"></Image>
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item">
                                                            <p className="stry_pro_name">Ordinary booty box</p>
                                                            <div className="strg_box_qunty">
                                                                <Image src={storage_box_item} fluid className="strg_qnty_img"></Image>
                                                                <p className="mb-0"> x <span>10</span></p>
                                                            </div>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <Link to="#" className="storg_open_btn">Open Now</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </Col>
                                    
                                        <Col xs="12" md="4" className="m-0 p-0">
                                            <div className="storg_boxe_effect">
                                                <div className="storg_boxes">
                                                    <Image src={package_grey} fluid className="storage_pack_img"></Image>
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item">
                                                            <p className="stry_pro_name">Ordinary booty box</p>
                                                            <div className="strg_box_qunty">
                                                                <Image src={storage_box_item} fluid className="strg_qnty_img"></Image>
                                                                <p className="mb-0"> x <span>10</span></p>
                                                            </div>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <Link to="#" className="storg_open_btn">Open Now</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </Col>
                                    
                                        <Col xs="12" md="4" className="m-0 p-0">
                                            <div className="storg_boxe_effect">
                                                <div className="storg_boxes">
                                                    <Image src={package_grey} fluid className="storage_pack_img"></Image>
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item">
                                                            <p className="stry_pro_name">Ordinary booty box</p>
                                                            <div className="strg_box_qunty">
                                                                <Image src={storage_box_item} fluid className="strg_qnty_img"></Image>
                                                                <p className="mb-0"> x <span>10</span></p>
                                                            </div>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <Link to="#" className="storg_open_btn">Open Now</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </Col>
                                    
                                        <Col xs="12" md="4" className="m-0 p-0">
                                            <div className="storg_boxe_effect">
                                                <div className="storg_boxes">
                                                    <Image src={package_grey} fluid className="storage_pack_img"></Image>
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item">
                                                            <p className="stry_pro_name">Ordinary booty box</p>
                                                            <div className="strg_box_qunty">
                                                                <Image src={storage_box_item} fluid className="strg_qnty_img"></Image>
                                                                <p className="mb-0"> x <span>10</span></p>
                                                            </div>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <Link to="#" className="storg_open_btn">Open Now</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </Col>
                                    
                                        <Col xs="12" md="4" className="m-0 p-0">
                                            <div className="storg_boxe_effect gray_strg_effect">
                                                <div className="storg_boxes">
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col xs="12" md="3">
                                <div className="characters_box_right storage_box_right">
                                    <div className="card_coll_inrf_right position-relative">
                                        <div className="storage_detail_form">
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <Image src={cards} fluid className="crd_dtl_img"></Image>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Form.Group className="mb-0 btn_drpdwn" controlId="legend_field">
                                                        <Form.Select className="select_form_input" aria-label="Default select example">
                                                            <option>LEGENDARY LOOT BOX </option>
                                                            <option value="1">one</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                </li>
                                            </ul>
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <Image src={reload} fluid className="crd_dtl_img"></Image>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Form.Group className="mb-0 btn_drpdwn" controlId="legend_field">
                                                        <Form.Select className="select_form_input" aria-label="Default select example">
                                                            <option>HERO LOOT BOX</option>
                                                            <option value="1">one</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </Form.Select>
                                                    </Form.Group>
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
                                                            placeholder="SEARCH FOR BOXS"
                                                            className="mr-2 card_search_field"
                                                            aria-label="Search"
                                                        />
                                                    </div>
                                                </li>
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
                                                    <Link to="/card-synthesis" className="btn_link_txt">Continue to buy</Link>
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