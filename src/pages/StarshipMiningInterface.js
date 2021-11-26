import React from "react";
import '../assets/css/style.css';
import { Container, Row, Col, Image, ProgressBar } from 'react-bootstrap';
import Card from '../assets/images/character/card.png';
import Leaf from '../assets/images/leaf.png';
import Plus from '../assets/images/plus.png';

export default function StarshipMiningInterface() {
    return (
        <>
            <div className="startship_interface_bg">
                <Container>
                    <Row>
                        <Col lg={3}>
                            <div className="smi_card_div">
                                <Image src={Card} alt="card" />
                            </div>
                        </Col>
                        <Col lg={9}>
                            <div className="smi_leaf_div">
                                <div className="smi_add_div_cont">
                                    <div className="smi_add_div">
                                        <div className="smi_add_imgdiv">
                                            <Image className="smi_plus_img" src={Plus} alt="plus" />
                                        </div>
                                        <div className="smi_add_progdiv">
                                            <span className="smi_add_progtext">
                                                Omani cane
                                            </span>
                                            <ProgressBar now={60} />
                                        </div>
                                        <div className="smi_add_numdiv">
                                            <span className="smi_add_numtxt">Power Point</span><br />
                                            <span className="smi_add_chngnum">+ 30</span>
                                        </div>
                                    </div>
                                    <div className="smi_add_div">
                                        <div className="smi_add_imgdiv">
                                            <Image className="smi_plus_img" src={Plus} alt="plus" />
                                        </div>
                                        <div className="smi_add_progdiv">
                                            <span className="smi_add_progtext">
                                                Oman Fire<br />Sword
                                            </span>
                                            <ProgressBar now={60} />
                                        </div>
                                        <div className="smi_add_numdiv">
                                            <span className="smi_add_numtxt">Power Point</span><br />
                                            <span className="smi_add_chngnum">+ 65</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="smi_leaf_imgdiv">
                                    <Image className="smi_leaf_img" src={Leaf} />
                                </div>
                                <div className="smi_rightleaf_div">
                                    <div className="smi_add_div_cont2 zero_numb">
                                        <div className="smi_add_imgdiv">
                                            <Image className="smi_plus_img" src={Plus} alt="plus" />
                                        </div>
                                        <div className="smi_add_progdiv">
                                            <span className="smi_add_progtext">
                                                ALfa Headarmor<br />Equipment
                                            </span>
                                            <ProgressBar now={60} />
                                        </div>
                                        <div className="smi_add_numdiv">
                                            <span className="smi_add_numtxt">Power Point</span><br />
                                            <span className="smi_add_chngnum">+ 0</span>
                                        </div>
                                    </div>
                                    <div className="smi_add_div_cont2">
                                        <div className="smi_add_imgdiv">
                                            <Image className="smi_plus_img" src={Plus} alt="plus" />
                                        </div>
                                        <div className="smi_add_progdiv">
                                            <span className="smi_add_progtext">
                                                Thoreau Cuirass<br /> Equipment
                                            </span>
                                            <ProgressBar now={60} />
                                        </div>
                                        <div className="smi_add_numdiv">
                                            <span className="smi_add_numtxt">Power Point</span><br />
                                            <span className="smi_add_chngnum">+ 60</span>
                                        </div>
                                    </div>
                                    <div className="smi_add_div_cont2 value_numb">
                                        <div className="smi_add_imgdiv">
                                            <Image className="smi_plus_img" src={Plus} alt="plus" />
                                        </div>
                                        <div className="smi_add_progdiv">
                                            <span className="smi_add_progtext">
                                                Thoreau Cuisse<br />Equipment
                                            </span>
                                            <ProgressBar now={60} />
                                        </div>
                                        <div className="smi_add_numdiv">
                                            <span className="smi_add_numtxt">Power Point</span><br />
                                            <span className="smi_add_chngnum">+ 25</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
};