import { Col, Container, Row, Image } from 'react-bootstrap';
import '../assets/css/style.css';
import Header from './header';

import Carousel from 'react-bootstrap/Carousel';

import wepon1 from '../assets/images/equipment/wepon1.png';
import starship_Polygon from '../assets/images/starship_Polygon.png';
import maintance_Setting from '../assets/images/maintance_Setting.png';
import maintance_bg from '../assets/images/maintance_bg.png';
import Button from '@restart/ui/esm/Button';

import uplevl_value1 from '../assets/images/uplevl_value1.png';
import uplevl_value2 from '../assets/images/uplevl_value2.png';
import uplevl_value3 from '../assets/images/uplevl_value3.png';


export default function StarshipUpgrade() {
    return (
        <>
            <div className="Starship_pages">
                <Header></Header>
                <section className="px-4 my-5 d-inline-block w-100">
                    <Container fluid className="px-4">
                        <Row>
                            <Col xs="12" md="4">
                                <div className="startship_left_cont">
                                    <div className="stsp_equip_wepon_slider">
                                        <Carousel interval={null}>
                                            <Carousel.Item>
                                                <Image src={wepon1} fluid className="stsp_equip_weapons_img" />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <Image src={wepon1} fluid className="stsp_equip_weapons_img" />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <Image src={wepon1} fluid className="stsp_equip_weapons_img" />
                                            </Carousel.Item>
                                        </Carousel>
                                    </div>
                                    <ul className="list-inline souvenir_top mt-5">
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
                                <div className="sshp_lvl_upgd_box upgraded_box">
                                    <div className="sshp_upgrd_left">
                                        <p>Level</p>
                                        <span>1</span>
                                    </div>
                                    <div className="sshp_upgrd_right">
                                        <ul className="list-inline w-100 mb-0">
                                            <li className="list-inline-item">
                                                <div className="uplevl_values">
                                                    <span>100</span>
                                                    <Image src={uplevl_value1} fluid />
                                                </div>
                                            </li>
                                            <li className="list-inline-item">
                                                <div className="uplevl_values">
                                                    <span>100</span>
                                                    <Image src={uplevl_value2} fluid />
                                                </div>
                                            </li>
                                            <li className="list-inline-item">
                                                <div className="uplevl_values">
                                                    <span>100</span>
                                                    <Image src={uplevl_value3} fluid />
                                                </div>
                                            </li>
                                            <li className="list-inline-item">
                                                <div className="uplevl_txt">
                                                    <p>Combat Effectiveness <span>+3%</span></p>
                                                    <p>30000 <span>900</span></p>
                                                </div>
                                            </li>
                                            <li className="list-inline-item">
                                                <Button className="level_upgrade_btn"><span>Upgrade</span></Button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sshp_lvl_upgd_box upgraded_box">
                                    <div className="sshp_upgrd_left">
                                        <p>Level</p>
                                        <span>2</span>
                                    </div>
                                    <div className="sshp_upgrd_right">
                                        <ul className="list-inline w-100 mb-0">
                                            <li className="list-inline-item">
                                                <div className="uplevl_values">
                                                    <span>100</span>
                                                    <Image src={uplevl_value1} fluid />
                                                </div>
                                            </li>
                                            <li className="list-inline-item">
                                                <div className="uplevl_values">
                                                    <span>100</span>
                                                    <Image src={uplevl_value2} fluid />
                                                </div>
                                            </li>
                                            <li className="list-inline-item">
                                                <div className="uplevl_values">
                                                    <span>100</span>
                                                    <Image src={uplevl_value3} fluid />
                                                </div>
                                            </li>
                                            <li className="list-inline-item">
                                                <div className="uplevl_txt">
                                                    <p>Combat Effectiveness <span>+3%</span></p>
                                                    <p>30000 <span>900</span></p>
                                                </div>
                                            </li>
                                            <li className="list-inline-item">
                                                <Button className="level_upgrade_btn"><span>Upgrade</span></Button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sshp_lvl_upgd_box">
                                    <div className="sshp_upgrd_left">
                                        <p>Level</p>
                                        <span>3</span>
                                    </div>
                                    <div className="sshp_upgrd_right">
                                        <ul className="list-inline w-100 mb-0">
                                            <li className="list-inline-item">
                                                <div className="uplevl_values">
                                                    <span>100</span>
                                                    <Image src={uplevl_value1} fluid />
                                                </div>
                                            </li>
                                            <li className="list-inline-item">
                                                <div className="uplevl_values">
                                                    <span>100</span>
                                                    <Image src={uplevl_value2} fluid />
                                                </div>
                                            </li>
                                            <li className="list-inline-item">
                                                <div className="uplevl_values">
                                                    <span>100</span>
                                                    <Image src={uplevl_value3} fluid />
                                                </div>
                                            </li>
                                            <li className="list-inline-item">
                                                <div className="uplevl_txt">
                                                    <p>Combat Effectiveness <span>+3%</span></p>
                                                    <p>30000 <span>900</span></p>
                                                </div>
                                            </li>
                                            <li className="list-inline-item">
                                                <Button className="level_upgrade_btn"><span>Upgrade</span></Button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sshp_lvl_upgd_box disable_upgd_box">
                                    <div className="sshp_upgrd_left">
                                        <p>Level</p>
                                        <span>4</span>
                                    </div>
                                    <div className="sshp_upgrd_right">
                                        <ul className="list-inline w-100 mb-0">
                                            <li className="list-inline-item">
                                                <div className="uplevl_values">
                                                    <span>100</span>
                                                    <Image src={uplevl_value1} fluid />
                                                </div>
                                            </li>
                                            <li className="list-inline-item">
                                                <div className="uplevl_values">
                                                    <span>100</span>
                                                    <Image src={uplevl_value2} fluid />
                                                </div>
                                            </li>
                                            <li className="list-inline-item">
                                                <div className="uplevl_values">
                                                    <span>100</span>
                                                    <Image src={uplevl_value3} fluid />
                                                </div>
                                            </li>
                                            <li className="list-inline-item">
                                                <div className="uplevl_txt">
                                                    <p>Combat Effectiveness <span>+3%</span></p>
                                                    <p>30000 <span>900</span></p>
                                                </div>
                                            </li>
                                            <li className="list-inline-item">
                                                <Button className="level_upgrade_btn"><span>Upgrade</span></Button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sshp_lvl_upgd_box disable_upgd_box">
                                    <div className="sshp_upgrd_left">
                                        <p>Level</p>
                                        <span>5</span>
                                    </div>
                                    <div className="sshp_upgrd_right">
                                        <ul className="list-inline w-100 mb-0">
                                            <li className="list-inline-item">
                                                <div className="uplevl_values">
                                                    <span>100</span>
                                                    <Image src={uplevl_value1} fluid />
                                                </div>
                                            </li>
                                            <li className="list-inline-item">
                                                <div className="uplevl_values">
                                                    <span>100</span>
                                                    <Image src={uplevl_value2} fluid />
                                                </div>
                                            </li>
                                            <li className="list-inline-item">
                                                <div className="uplevl_values">
                                                    <span>100</span>
                                                    <Image src={uplevl_value3} fluid />
                                                </div>
                                            </li>
                                            <li className="list-inline-item">
                                                <div className="uplevl_txt">
                                                    <p>Combat Effectiveness <span>+3%</span></p>
                                                    <p>30000 <span>900</span></p>
                                                </div>
                                            </li>
                                            <li className="list-inline-item">
                                                <Button className="level_upgrade_btn"><span>Upgrade</span></Button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sshp_lvl_upgd_box disable_upgd_box">
                                    <div className="sshp_upgrd_left">
                                        <p>Level</p>
                                        <span>6</span>
                                    </div>
                                    <div className="sshp_upgrd_right">
                                        <ul className="list-inline w-100 mb-0">
                                            <li className="list-inline-item">
                                                <div className="uplevl_values">
                                                    <span>100</span>
                                                    <Image src={uplevl_value1} fluid />
                                                </div>
                                            </li>
                                            <li className="list-inline-item">
                                                <div className="uplevl_values">
                                                    <span>100</span>
                                                    <Image src={uplevl_value2} fluid />
                                                </div>
                                            </li>
                                            <li className="list-inline-item">
                                                <div className="uplevl_values">
                                                    <span>100</span>
                                                    <Image src={uplevl_value3} fluid />
                                                </div>
                                            </li>
                                            <li className="list-inline-item">
                                                <div className="uplevl_txt">
                                                    <p>Combat Effectiveness <span>+3%</span></p>
                                                    <p>30000 <span>900</span></p>
                                                </div>
                                            </li>
                                            <li className="list-inline-item">
                                                <Button className="level_upgrade_btn"><span>Upgrade</span></Button>
                                            </li>
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