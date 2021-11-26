import '../assets/css/style.css'
import { Col, Container, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';

import Header from './header';
import char1 from '../assets/images/character/char.jpg';
import bottom_line_style from '../assets/images/bottom_line_style.png';
import top_line_style from '../assets/images/top_line_style.png';
import box_style from '../assets/images/box_style.png';
import refresh from '../assets/images/refresh.jpg';
import char_brand from '../assets/images/char_brand.png';
import Button from 'react-bootstrap/Button';

export default function Home() {
    return (
        <div className="">
            <Header></Header>
            <section>
                <Container fluid className="px-4">
                    <div className="characters_box">
                        <Row>
                            <Col xs="12" md="9">
                                <div className="characters_box_left">
                                    <Row>
                                        <Col xs="12" md="2">
                                            <div className="top_char_line">
                                                <Image src={box_style} fluid></Image>
                                            </div>
                                            <Link to="/" className="char_card">
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
                                            <Link to="/" className="char_card">
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
                                            <Link to="/" className="char_card">
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
                                            <Link to="/" className="char_card">
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
                                            <Link to="/" className="char_card">
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
                                            <Link to="/" className="char_card">
                                                <Image src={char1} fluid className="char_img"></Image>
                                            </Link>
                                            <div className="botm_char_line">
                                                <Image src={bottom_line_style} fluid></Image>
                                            </div>
                                        </Col>
                                        <Col xs="12" md="2">
                                            <div className="top_char_line">
                                                <Image src={top_line_style} fluid></Image>
                                            </div>
                                            <Link to="/" className="char_card">
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
                                            <Link to="/" className="char_card">
                                                <Image src={char1} fluid className="char_img"></Image>
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
                                    <div className="card_detail_form">
                                        <ul className="list-inline">
                                            <li className="list-inline-item">
                                                <Image src={refresh} fluid className="crd_dtl_img"></Image>
                                            </li>
                                            <li className="list-inline-item">
                                                <div className="btn_drpdwn">
                                                    <div className="mb-0">
                                                        <Button variant=""> Drop </Button>
                                                        <span>Legend1</span>
                                                        {/* <span>Legend2</span>
                                                        <span>Legend3</span> */}
                                                    </div>
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
                                        <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
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