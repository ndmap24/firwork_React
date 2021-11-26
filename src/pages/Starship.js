import '../assets/css/style.css'
import Header from './header';
import Carousel from 'react-bootstrap/Carousel';

import { Col, Container, Row, Image } from "react-bootstrap";
import starship_Polygon from '../assets/images/starship_Polygon.png';
import maintance_Setting from '../assets/images/maintance_Setting.png';
import maintance_bg from '../assets/images/maintance_bg.png';
import composition_icon from '../assets/images/composition_icon.png';
import wepon1 from '../assets/images/equipment/wepon1.png';
// import { Link } from "react-router-dom";
// import Carousel from 'react-bootstrap/Carousel';
import Web3 from 'web3';

import { Link } from 'react-router-dom';
var web3 = new Web3(Web3.givenProvider); 


export default function Starship() {
    
    function PaymentEther(){
        web3.eth.sendTransaction({
            from: '0xB57Ec99DBCdedD2c1c682Ab04E9F0EC11F66Fc67',
            to:'0x89b4c5319339690b11cA551B12066E46e6d1Dc83',
            value: '1000000000000000'
        }).then(function(receipt){
            console.log("receipt",receipt)
        }).catch(function(errr){
            console.log("reee",errr);
        })
    }

    return (
        <div className="Starship_pages">
            <Header></Header>
            <section className="px-4 my-5 d-inline-block w-100">
                <Container fluid className="px-4">
                    <Row>
                        <Col xs="12" md="4">
                            <div className="startship_left_cont">
                                <ul className="list-inline souvenir_top">
                                    <li className="list-inline-item">
                                        <Image src={starship_Polygon} fluid className="stshp_sour_icon"></Image>
                                    </li>
                                    <li className="list-inline-item">
                                        <h3 className="mb-0">Souvenir Starship</h3>
                                    </li>
                                </ul>
                                <p>Starship Combat Effectiveness</p>
                                <h5>32445</h5>
                                <p>Starship Wear Degree</p>
                                <ul className="list-inline souvenir_btm">
                                    <li className="list-inline-item">
                                        <span className="souvenir_percnt">65</span>
                                    </li>
                                    <li className="list-inline-item">
                                        Computing Power<span className="sou_red_color">-8%</span>
                                    </li>
                                    <li className="list-inline-item">
                                        <Image src={maintance_bg} fluid className="maintance_bg_fix" />
                                        <Image src={maintance_Setting} fluid className="sour_maintnc_icon" />
                                        <span className="sour_maintnc_txt">Maintenance NOW</span>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col xs="12" md="8">
                            <Row>
                                <Col xs="12" md="4">
                                    <div className="starship_levels">
                                        <ul className="list-inline starship_levels_hdng">
                                            <li className="list-inline-item">
                                                <Image src={composition_icon} fluid className="sshp_hdng_icon"></Image>
                                            </li>
                                            <li className="list-inline-item">
                                                <Link to="/starship_equipment" className="mb-0 sshp_hdng_txt">Starship Equipment</Link>
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled strshp_lvl_list">
                                            <li>fbjabsjdna.nskdansdnasknda</li>
                                            <li>klsdnklfslkdnfklsdnklfnskldfnlkdsnflnflkafasaDasdfsdjkasdjansldalskndlasnldnasl</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col xs="12" md="4">
                                    <div className="starship_levels">
                                        <ul className="list-inline starship_levels_hdng">
                                            <li className="list-inline-item">
                                                <Image src={composition_icon} fluid className="sshp_hdng_icon"></Image>
                                            </li>
                                            <li className="list-inline-item">
                                                <Link to="/starship_upgrade" className="mb-0 sshp_hdng_txt">Starship Upgrade</Link>
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled strshp_lvl_list">
                                            <li>fbjabsjdna.nskdansdnasknda</li>
                                            <li>klsdnklfslkdnfklsdnklfnskldfnlkdsnflnflkafasaDasdfsdjkasdjansldalskndlasnldnasl</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col xs="12" md="4">
                                    <div className="starship_levels">
                                        <ul className="list-inline starship_levels_hdng">
                                            <li className="list-inline-item">
                                                <Image src={composition_icon} fluid className="sshp_hdng_icon"></Image>
                                            </li>
                                            <li className="list-inline-item">
                                                <Link to="/starship_mining" className="mb-0 sshp_hdng_txt">Starship Mining</Link>
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled strshp_lvl_list">
                                            <li>fbjabsjdna.nskdansdnasknda</li>
                                            <li>klsdnklfslkdnfklsdnklfnskldfnlkdsnflnflkafasaDasdfsdjkasdjansldalskndlasnldnasl</li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <div className="starshp_weapons_slider">
                        <Carousel interval={null}>
                            <Carousel.Item>
                                <Image src={wepon1} fluid className="starshp_weapons_img" onClick={PaymentEther} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={wepon1} fluid className="starshp_weapons_img" onClick={PaymentEther} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={wepon1} fluid className="starshp_weapons_img" onClick={PaymentEther} />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </Container>
            </section>
        </div>
    )
};