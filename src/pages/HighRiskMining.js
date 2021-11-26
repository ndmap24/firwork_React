import { Col, Container, Row, Image, Nav } from 'react-bootstrap';
import '../assets/css/style.css';
import Header from './header';

// import TabPane from 'react-bootstrap/TabPane';
import Tab from 'react-bootstrap/Tab';

import plane_risk_high from '../assets/images/plane_risk_high.png';
import starship_Polygon from '../assets/images/starship_Polygon.png';
import clock_img from '../assets/images/clock_img.png';
import risk_month_img from '../assets/images/risk_month.png';

export default function HighRiskMining() {
    return (
        <>
            <div className="Starship_pages">
                <Header></Header>
                <section className="px-4 py-4 my-5 d-inline-block w-100">
                    <Container fluid className="px-5">
                        <Row>
                            <Col xs="12" md="4">
                                <div className="strshp_risk_left">
                                    <Image src={plane_risk_high} className="img-fluid"></Image>
                                </div>
                            </Col>
                            <Col xs="12" md="8">
                                <div className="strshp_risk_right">
                                    <div className="risk_top_heading mb-5">
                                        <span className="rsk_hdg_img">
                                            <Image src={starship_Polygon} className="img-fluid"></Image>
                                        </span>
                                        <h5>High Risk FIRE Mining Pool</h5>
                                    </div>
                                    <Row>
                                        <Col xs="12" md="8">
                                            <ul className="list-unstyled risk_list mb-5">
                                                <li>Mine tokens corresponding to the time</li>
                                                <li>xx FIRE are available in 24 hours</li>
                                            </ul>
                                            <ul className="list-unstyled risk_points">
                                                <li>March: 8-24 hours, 20% for losing 20% computing power permanently</li>
                                                <li>March: 24-48 hours, 15% for losing 15% computing power permanently</li>
                                                <li>March: 48-72hours, 10% for losing 15% computing power permanently</li>
                                            </ul>
                                            <div className="tabs_content">
                                                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                                    <Row>
                                                        <Col sm={12}>
                                                            <div className="risk_hours_tab">
                                                                <div className="left_hours">
                                                                    <Image src={clock_img} fluid></Image>
                                                                </div>
                                                                <div className="right_hours">
                                                                    <Nav horizontal="pills" className="flex-wrap hours_nav">
                                                                        <Nav.Item>
                                                                            <Nav.Link eventKey="8hrs">
                                                                                <span className="position-relative">8 Hours</span>
                                                                            </Nav.Link>
                                                                        </Nav.Item>
                                                                        <Nav.Item>
                                                                            <Nav.Link eventKey="16hrs">
                                                                                <span className="position-relative">16 Hours</span>
                                                                            </Nav.Link>
                                                                        </Nav.Item>
                                                                        <Nav.Item>
                                                                            <Nav.Link eventKey="24hrs">
                                                                                <span className="position-relative">24 Hours</span>
                                                                            </Nav.Link>
                                                                        </Nav.Item>
                                                                        <Nav.Item>
                                                                            <Nav.Link eventKey="32hrs">
                                                                                <span className="position-relative">32 Hours</span>
                                                                            </Nav.Link>
                                                                        </Nav.Item>
                                                                        <Nav.Item>
                                                                            <Nav.Link eventKey="40hrs">
                                                                                <span className="position-relative">40 Hours</span>
                                                                            </Nav.Link>
                                                                        </Nav.Item>
                                                                        <Nav.Item>
                                                                            <Nav.Link eventKey="48hrs">
                                                                                <span className="position-relative">48 Hours</span>
                                                                            </Nav.Link>
                                                                        </Nav.Item>
                                                                        <Nav.Item>
                                                                            <Nav.Link eventKey="56hrs">
                                                                                <span className="position-relative">56 Hours</span>
                                                                            </Nav.Link>
                                                                        </Nav.Item>
                                                                        <Nav.Item>
                                                                            <Nav.Link eventKey="64hrs">
                                                                                <span className="position-relative">64 Hours</span>
                                                                            </Nav.Link>
                                                                        </Nav.Item>
                                                                        <Nav.Item>
                                                                            <Nav.Link eventKey="72hrs">
                                                                                <span className="position-relative">72 Hours</span>
                                                                            </Nav.Link>
                                                                        </Nav.Item>
                                                                    </Nav>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col sm={12}>
                                                            <Tab.Content className="risk_tab_content mt-4">
                                                                <Tab.Pane eventKey="8hrs">
                                                                    <ul className="list-unstyled hrs_list">
                                                                        <li>Gain FIRE tokens in 8 hours</li>
                                                                        <li>80% for gaining a weapon card in silver</li>
                                                                        <li>40% for gaining an equipment card in brass</li>
                                                                        <li>5% for gaining loot box</li>
                                                                    </ul>
                                                                    <ul className="list-unstyled danger_hrs_list mt-5">
                                                                        <li className="danger_tab">March for 49 hours, 15% for losing 15% computing power permanently</li>
                                                                        <li className="danger_tab">Warship Friction：6/time</li>
                                                                    </ul>
                                                                    <p>Turn on your battleship to explore further mining pools and obtain more abundant minerals!</p>
                                                                </Tab.Pane>
                                                                <Tab.Pane eventKey="16hrs">
                                                                    <ul className="list-unstyled hrs_list">
                                                                        <li>Gain FIRE tokens in 16 hours</li>
                                                                        <li>80% for gaining a weapon card in silver</li>
                                                                        <li>40% for gaining an equipment card in brass</li>
                                                                        <li>5% for gaining loot box</li>
                                                                    </ul>
                                                                    <ul className="list-unstyled danger_hrs_list mt-5">
                                                                        <li className="danger_tab">March for 49 hours, 15% for losing 15% computing power permanently</li>
                                                                        <li className="danger_tab">Warship Friction：6/time</li>
                                                                    </ul>
                                                                </Tab.Pane>
                                                                <Tab.Pane eventKey="24hrs">
                                                                    <ul className="list-unstyled hrs_list">
                                                                        <li>Gain FIRE tokens in 24 hours</li>
                                                                        <li>80% for gaining a weapon card in silver</li>
                                                                        <li>40% for gaining an equipment card in brass</li>
                                                                        <li>5% for gaining loot box</li>
                                                                    </ul>
                                                                    <ul className="list-unstyled danger_hrs_list mt-5">
                                                                        <li className="danger_tab">March for 49 hours, 15% for losing 15% computing power permanently</li>
                                                                        <li className="danger_tab">Warship Friction：6/time</li>
                                                                    </ul>
                                                                </Tab.Pane>
                                                                <Tab.Pane eventKey="32hrs">
                                                                    <ul className="list-unstyled hrs_list">
                                                                        <li>Gain FIRE tokens in 32 hours</li>
                                                                        <li>80% for gaining a weapon card in silver</li>
                                                                        <li>40% for gaining an equipment card in brass</li>
                                                                        <li>5% for gaining loot box</li>
                                                                    </ul>
                                                                    <ul className="list-unstyled danger_hrs_list mt-5">
                                                                        <li className="danger_tab">March for 49 hours, 15% for losing 15% computing power permanently</li>
                                                                        <li className="danger_tab">Warship Friction：6/time</li>
                                                                    </ul>
                                                                </Tab.Pane>
                                                                <Tab.Pane eventKey="40hrs">
                                                                    <ul className="list-unstyled hrs_list">
                                                                        <li>Gain FIRE tokens in 40 hours</li>
                                                                        <li>80% for gaining a weapon card in silver</li>
                                                                        <li>40% for gaining an equipment card in brass</li>
                                                                        <li>5% for gaining loot box</li>
                                                                    </ul>
                                                                    <ul className="list-unstyled danger_hrs_list mt-5">
                                                                        <li className="danger_tab">March for 49 hours, 15% for losing 15% computing power permanently</li>
                                                                        <li className="danger_tab">Warship Friction：6/time</li>
                                                                    </ul>
                                                                </Tab.Pane>
                                                                <Tab.Pane eventKey="48hrs">
                                                                    <ul className="list-unstyled hrs_list">
                                                                        <li>Gain FIRE tokens in 48 hours</li>
                                                                        <li>80% for gaining a weapon card in silver</li>
                                                                        <li>40% for gaining an equipment card in brass</li>
                                                                        <li>5% for gaining loot box</li>
                                                                    </ul>
                                                                    <ul className="list-unstyled danger_hrs_list mt-5">
                                                                        <li className="danger_tab">March for 49 hours, 15% for losing 15% computing power permanently</li>
                                                                        <li className="danger_tab">Warship Friction：6/time</li>
                                                                    </ul>
                                                                </Tab.Pane>
                                                                <Tab.Pane eventKey="56hrs">
                                                                    <ul className="list-unstyled hrs_list">
                                                                        <li>Gain FIRE tokens in 56 hours</li>
                                                                        <li>80% for gaining a weapon card in silver</li>
                                                                        <li>40% for gaining an equipment card in brass</li>
                                                                        <li>5% for gaining loot box</li>
                                                                    </ul>
                                                                    <ul className="list-unstyled danger_hrs_list mt-5">
                                                                        <li className="danger_tab">March for 49 hours, 15% for losing 15% computing power permanently</li>
                                                                        <li className="danger_tab">Warship Friction：6/time</li>
                                                                    </ul>
                                                                </Tab.Pane>
                                                                <Tab.Pane eventKey="64hrs">
                                                                    <ul className="list-unstyled hrs_list">
                                                                        <li>Gain FIRE tokens in 64 hours</li>
                                                                        <li>80% for gaining a weapon card in silver</li>
                                                                        <li>40% for gaining an equipment card in brass</li>
                                                                        <li>5% for gaining loot box</li>
                                                                    </ul>
                                                                    <ul className="list-unstyled danger_hrs_list mt-5">
                                                                        <li className="danger_tab">March for 49 hours, 15% for losing 15% computing power permanently</li>
                                                                        <li className="danger_tab">Warship Friction：6/time</li>
                                                                    </ul>
                                                                </Tab.Pane>
                                                                <Tab.Pane eventKey="72hrs">
                                                                    <ul className="list-unstyled hrs_list">
                                                                        <li>Gain FIRE tokens in 72 hours</li>
                                                                        <li>80% for gaining a weapon card in silver</li>
                                                                        <li>40% for gaining an equipment card in brass</li>
                                                                        <li>5% for gaining loot box</li>
                                                                    </ul>
                                                                    <ul className="list-unstyled danger_hrs_list mt-5">
                                                                        <li className="danger_tab">March for 49 hours, 15% for losing 15% computing power permanently</li>
                                                                        <li className="danger_tab">Warship Friction：6/time</li>
                                                                    </ul>
                                                                </Tab.Pane>
                                                            </Tab.Content>
                                                        </Col>
                                                    </Row>
                                                </Tab.Container>
                                            </div>
                                        </Col>                                        
                                        <Col xs="12" md="4">
                                            <div className="right_risk_month">
                                                <div className="risk_month_image">
                                                    <Image src={risk_month_img} fluid></Image>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        </>
    )
};