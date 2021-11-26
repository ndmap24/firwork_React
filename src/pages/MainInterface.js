import { Col, Row, Image, Container } from 'react-bootstrap';
import '../assets/css/style.css'

import Header from './header';
import { Link } from 'react-router-dom';
import Intersection1 from '../assets/images/Intersection1.png';
import Intersection2 from '../assets/images/Intersection2.png';
import Intersection3 from '../assets/images/Intersection3.png';
import composition_icon from '../assets/images/composition_icon.png';
import albertopetronio from '../assets/images/albertopetronio.png';
import Inter_calendar from '../assets/images/Inter_calendar.png';

export default function MainInterface() {
    return (
        <div className="mainInterface_page">
            <Header></Header>
            <section className="px-4 my-3 d-inline-block w-100">
                <Container fluid className="px-4">
                    <Row>
                        <Col xs="12" md="9">
                            <div className="mainInterface_section">
                                <Row>
                                    <Col xs="12" md="7">
                                        <Link className="mainInterface_box mainInterface_box1">
                                            <div className="mainInterface_box_img">
                                                <Image src={Intersection1} fluid></Image>
                                            </div>
                                            <div className="mainInterface_box_txt mainInterface_box_txt1">
                                                <p>play any mode now</p>
                                                <h3><span>quick match</span></h3>
                                            </div>
                                        </Link>
                                    </Col>
                                    <Col xs="12" md="5">
                                        <Link to="/interstellar_trader_treasured" className="mainInterface_box mainInterface_box2">
                                            <div className="mainInterface_box_img">
                                                <Image src={Intersection2} fluid></Image>
                                            </div>
                                            <div className="mainInterface_box_txt mainInterface_box_txt2">
                                                <h5>Rare booty box</h5>
                                                <h3><span>BUY <b>10</b> TO GIVE <i className="rbb_1">1</i></span></h3>
                                            </div>
                                        </Link>
                                        <Link className="mainInterface_box mainInterface_box3">
                                            <div className="mainInterface_box_img">
                                                <Image src={Intersection3} fluid></Image>
                                            </div>
                                            <div className="mainInterface_box_txt mainInterface_box_txt3">
                                                <h3><span>Starship Tour</span></h3>
                                                <p>asdasdasnasmd.ans.nda.scascdasdasdasdasdbtybvsfdasddascdasdasdasdasvtsvcrfasgserer！</p>
                                            </div>
                                        </Link>
                                    </Col>
                                </Row>
                            </div>
                            <div className="mainIntf_bottom_section">
                                <Row>
                                    <Col xs="12" md="4">
                                        <div className="cmps_decmps_frame_box">
                                            <div className="cmps_decmps_left">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <Image src={composition_icon} fluid className="cmps_icon"></Image>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <h6 className="mb-0">Composition</h6>
                                                    </li>
                                                </ul>
                                                <ul className="list-inline mb-0">
                                                    <li className="list-inline-item">
                                                        <Image src={composition_icon} fluid className="cmps_icon"></Image>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <h6 className="mb-0">Decomposition</h6>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="cmps_decmps_right">
                                                <Link to="/card-collection-interface" className="d-inline-block">
                                                    <Image src={albertopetronio} fluid></Image>
                                                </Link>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs="12" md="1"></Col>
                                    <Col xs="12" md="7">
                                        <div className="mainIntf_btm_right">
                                            <Image src={Inter_calendar} fluid></Image>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
};