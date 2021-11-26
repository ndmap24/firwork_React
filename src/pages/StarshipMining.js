import { Col, Container, Row, Image } from 'react-bootstrap';
import '../assets/css/style.css';
import Header from './header';
import starship_Polygon from '../assets/images/starship_Polygon.png';
import plane_risk_low from '../assets/images/plane_risk_low.png';
import plane_risk_medium from '../assets/images/plane_risk_medium.png';
import plane_risk_high from '../assets/images/plane_risk_high.png';
import plane_risk_excess from '../assets/images/plane_risk_excess.png';
import { Link } from 'react-router-dom';


export default function StarshipMining() {
    return (
        <>
            <div className="Starship_pages">
                <Header></Header>
                <section className="px-4 py-4 my-5 d-inline-block w-100">
                    <Container fluid className="px-5">
                        <Row>
                            <Col xs="12" md="3">
                                <div className="planet_risk_box">
                                    <Link to="#" className="planet_risk_img">
                                        <Image src={plane_risk_low} fluid />
                                    </Link>
                                    <div className="planet_risk_txt">
                                        <ul className="list-inline planet_risk_hdng">
                                            <li className="list-inline-item">
                                                <Image src={starship_Polygon} fluid />
                                            </li>
                                            <li className="list-inline-item">
                                                <Link className="mb-0 risk_hdng">Low Risk FIRE Mining Pool</Link>
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled planet_risk_list">
                                            <li>Mine tokens corresponding to the time</li>
                                            <li>xx FIRE are available in 24 hours</li>

                                        </ul>
                                    </div>
                                </div>
                            </Col>

                            <Col xs="12" md="3">
                                <div className="planet_risk_box">
                                    <Link to="#" className="planet_risk_img">
                                        <Image src={plane_risk_medium} fluid />
                                    </Link>
                                    <div className="planet_risk_txt">
                                        <ul className="list-inline planet_risk_hdng">
                                            <li className="list-inline-item">
                                                <Image src={starship_Polygon} fluid />
                                            </li>
                                            <li className="list-inline-item">
                                                <Link className="mb-0 risk_hdng">Medium Risk FIRE Mining Pool</Link>
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled planet_risk_list">
                                            <li>Mine tokens corresponding to the time</li>
                                            <li>xx FIRE are available in 24 hours</li>

                                        </ul>
                                    </div>
                                </div>
                            </Col>

                            <Col xs="12" md="3">
                                <div className="planet_risk_box">
                                    <Link to="/high_risk_mining" className="planet_risk_img">
                                        <Image src={plane_risk_high} fluid />
                                    </Link>
                                    <div className="planet_risk_txt">
                                        <ul className="list-inline planet_risk_hdng">
                                            <li className="list-inline-item">
                                                <Image src={starship_Polygon} fluid />
                                            </li>
                                            <li className="list-inline-item">
                                                <Link to="/high_risk_mining" className="mb-0 risk_hdng">High Risk FIRE Mining Pool</Link>
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled planet_risk_list">
                                            <li>Mine tokens corresponding to the time</li>
                                            <li>xx FIRE are available in 24 hours</li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>

                            <Col xs="12" md="3">
                                <div className="planet_risk_box">
                                    <Link to="#" className="planet_risk_img">
                                        <Image src={plane_risk_excess} fluid />
                                    </Link>
                                    <div className="planet_risk_txt">
                                        <ul className="list-inline planet_risk_hdng">
                                            <li className="list-inline-item">
                                                <Image src={starship_Polygon} fluid />
                                            </li>
                                            <li className="list-inline-item">
                                                <Link className="mb-0 risk_hdng">Excess Risk Mining Pool
                                                </Link>
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled planet_risk_list">
                                            <li>Mine tokens corresponding to the time</li>
                                            <li>xx FIRE are available in 24 hours</li>

                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        </>
    )
};