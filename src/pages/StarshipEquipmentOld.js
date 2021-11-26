import { Col, Container, Row, Image } from 'react-bootstrap';
import '../assets/css/style.css';
import Header from './header';
import axios from 'axios';

import Carousel from 'react-bootstrap/Carousel';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


import wepon1 from '../assets/images/equipment/wepon1.png';
// import wepon1 from '../firework_Image/starShipImages';
import starship_Polygon from '../assets/images/starship_Polygon.png';
import maintance_Setting from '../assets/images/maintance_Setting.png';
import maintance_bg from '../assets/images/maintance_bg.png';

import char1 from '../assets/images/character/char1.png';
import char2 from '../assets/images/character/char2.png';
import char3 from '../assets/images/character/char3.png';
import char4 from '../assets/images/character/char4.png';
import card_lock from '../assets/images/card_lock.png';
import equp_txtuer_box from '../assets/images/equp_txtuer_box.png';
import equp_txtuer_bg from '../assets/images/equp_txtuer_bg.png';

import ssp_equp_face1 from '../assets/images/ssp_equp_face1.png';
import ssp_equp_face2 from '../assets/images/ssp_equp_face2.png';
import ssp_equp_face3 from '../assets/images/ssp_equp_face3.png';
import ssp_equp_face4 from '../assets/images/ssp_equp_face4.png';
import Pop from './Pop';
import React, { useState, useEffect } from 'react'
import Button from '@restart/ui/esm/Button';


export default function StarshipEquipment() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // var starShipArr = [];
    var [commander,setCommander] = useState();
    var [starWarrior, setstarWarrior] = useState();
    var [scientist, setScientist] = useState(); 
    var [soldier, setSoldier] = useState();
    var [initiateOpenSlotNumber1, setInitiateOpenSlotNumber]= useState([]);
    var [maxSlotsNumber1, setMaxSlotsNumber]= useState([]);
    
    var [initiatePower1, setInitiatePower]= useState();
    
    const [starShipArr, setStarShipArr] = React.useState(null);
    const [oneStarShip, setOneStarShip] = React.useState(null);
    const [isLoading, setIsLoading] = useState(false);
   
    // if(isLoading === 'false'){

    //     console.log('sdfsdf');
    // const getallstarship = () => {
    //     const url = 'https://firework-ndm.herokuapp.com/api/getAllStarShip';
    //     let data = fetch(url);
    //     let parsedData = data.json()
    //     setStarShipArr(parsedData.data);
    //     setOneStarShip(starShipArr[4]);
    //     console.log("oneStarShip",oneStarShip);
    //     // setInitiateOpenSlotNumber(oneStarShip.initiateOpenSlotNumber);
    //     // setMaxSlotsNumber(oneStarShip.MaxSlotsNumber);
    //     // setInitiatePower(oneStarShip.initiatePower);    
    //     // console.log("initi1atePower",initiatePower1)
    // }
// }


    // useEffect(() => {
    //     console.log('me garib hu');
    //     fetchMyAPI();
    // }, [])

    


    useEffect(() => {
        const fetchMyAPI = async () => {

            fetch(
                `https://firework-ndm.herokuapp.com/api/getAllStarShip`,
                {
                  method: "GET",
                  headers:{'Content-Type':'application/json'}
                }
              )
                .then(res => res.json())
                .then(response => {
                    setStarShipArr(response.data);
                    console.log("StarShipArr",starShipArr[0]);
                    const oneSS = starShipArr[0];
                    console.log("oneSS",oneSS)
                    setOneStarShip(oneSS);
                    console.log("oneStarShip",oneStarShip);
                    // setInitiateOpenSlotNumber(oneStarShip.initiateOpenSlotNumber[0]);
                    // console.log("initiateOpenSlotNumber1",initiateOpenSlotNumber1);
                    // setMaxSlotsNumber(oneStarShip.MaxSlotsNumber[0]);
                    // console.log("maxSlotsNumber1",maxSlotsNumber1);
                    setIsLoading(true);
                })
                .catch(error => console.log(error));
            }
        console.log('me garib hu');
        console.log(starShipArr, oneStarShip, 'starShipArr');
        fetchMyAPI();
    },[]);
    return (
        
        <>
        {isLoading ? <p> comments for you</p> : <p>Wait I'm Loading comments for you</p>}
        {isLoading ? 
            <div className="Starship_pages">
                <Header></Header>
                <Pop show={show} setShow={setShow} handleClose={handleClose} handleShow={handleShow} />
                <section className="px-4 my-5 d-inline-block w-100">
                    <Container fluid className="px-4">
                        <Row>
                            <Col xs="12" md="4">
                                <div className="startship_left_cont">
                                    <div className="stsp_equip_wepon_slider">
                                        <Carousel interval={null} >
                                            {starShipArr.map((name,pos) => (
                                                <Carousel.Item >
                                                    <Image key={pos} src={wepon1} className="stsp_equip_weapons_img" id={name._id} />
                                                    
                                                </Carousel.Item>
                                            ))}
                                            {/* <a className="carousel-control-prev" role="button" tabindex="0"><span aria-hidden="true" className="carousel-control-prev-icon"></span><span className="visually-hidden">Previous</span></a> */}
                                        {/* <Carousel.Item>
                                                <Image src= {`'../../firework_Image/starShipImages/'+${starShipArr[0].image}`} className="stsp_equip_weapons_img" />
                                            </Carousel.Item> */}
                                        {/* <Carousel.Item>
                                                <Image src= {`"http://localhost:8003/static/media/"+${starShipArr[0]['image']}`} className="stsp_equip_weapons_img" />
                                            </Carousel.Item> */}
                                        {/* <Carousel.Item>
                                                <Image src={wepon1} fluid className="stsp_equip_weapons_img" />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <Image src={wepon1} fluid className="stsp_equip_weapons_img" />
                                            </Carousel.Item> */}
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
                                            <span className="souvenir_percnt">{initiatePower1}</span>
                                        </li>
                                        <li className="list-inline-itemls">
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
                                <div className="starshp_equipmnt_right">
                                    <div className="starshp_equipmnt_right_box">
                                    {/* {oneStarShip.initiateOpenSlotNumber[0].commander && */}
                                        <Row>
                                            <Col xs="12" md="2">
                                                <div className="ssp_eqp_face">
                                                    <div className="ssp_eqp_face_img">
                                                        <Image src={equp_txtuer_box} fluid className="equp_txtuer_box_img" />
                                                        <Image src={ssp_equp_face1} fluid className="equp_face_shield"></Image>
                                                    </div>
                                                    <div className="ssp_eqp_face_txt">
                                                        <p>Commander</p>
                                                        <span><b>{oneStarShip.initiateOpenSlotNumber[0].commander}/</b>{oneStarShip.MaxSlotsNumber[0].commander}</span>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xs="12" md="10">
                                                <div className="ssp_eqp_cards">
                                                    <Image src={equp_txtuer_bg} fluid className="equp_txtuer_bg_img" />
                                                    {/* {oneStarShip.initiateOpenSlotNumber[0].commander.map((name,pos) => (
                                                        // <Carousel.Item >
                                                        //     <Image src={wepon1} className="stsp_equip_weapons_img" key={pos} id={name._id} />
                                                            
                                                        // </Carousel.Item>
                                                        <div className='item'>
                                                            <div className="ssp_eqp_crd_img">
                                                                <Image src={char1} fluid onClick={handleShow} />
                                                                <p>Commander1</p>
                                                            </div>
                                                        </div>
                                                    ))} */}
                                                    <OwlCarousel className='owl-theme ssp_eqp_cards_slider' items={6} margin={5} nav>
                                                        
                                                        <div className='item'>
                                                            <div className="ssp_eqp_crd_img">
                                                                <Image src={char1} fluid onClick={handleShow} />
                                                                <p>Commander1</p>
                                                            </div>
                                                        </div>
                                                        <div className='item'>
                                                            <div className="ssp_eqp_crd_img">
                                                                <Image src={char2} fluid />
                                                                <p>Commander2</p>
                                                            </div>
                                                        </div>
                                                        <div className='item'>
                                                            <div className="ssp_eqp_crd_img">
                                                                <Image src={char3} fluid />
                                                                <p>Commander3</p>
                                                            </div>
                                                        </div>
                                                        <div className='item'>
                                                            <div className="ssp_eqp_crd_img">
                                                                <Image src={card_lock} fluid />
                                                                <p>Commander4</p>
                                                            </div>
                                                        </div>
                                                        <div className='item'>
                                                            <div className="ssp_eqp_crd_img">
                                                                <Image src={card_lock} fluid />
                                                                <p>Commander5</p>
                                                            </div>
                                                        </div>
                                                    </OwlCarousel>
                                                </div>
                                            </Col>
                                        </Row>
                                    {/* } */}
                                    </div>
                                    {/* {initiateOpenSlotNumber1[0].scientist &&   */}
                                       <div className="starshp_equipmnt_right_box">
                                        <Row>
                                            <Col xs="12" md="2">
                                                <div className="ssp_eqp_face">
                                                    <div className="ssp_eqp_face_img">
                                                        <Image src={equp_txtuer_box} fluid className="equp_txtuer_box_img" />
                                                        <Image src={ssp_equp_face2} fluid className="equp_face_shield"></Image>
                                                    </div>
                                                    <div className="ssp_eqp_face_txt">
                                                        <p>Scientist</p>
                                                        <span><b>3/</b>5</span>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xs="12" md="10">
                                                <div className="ssp_eqp_cards">
                                                    <Image src={equp_txtuer_bg} fluid className="equp_txtuer_bg_img" />
                                                    <OwlCarousel className='owl-theme ssp_eqp_cards_slider' items={6} margin={5} nav>
                                                        <div className='item'>
                                                            <div className="ssp_eqp_crd_img">
                                                                <Image src={char1} fluid />
                                                                <p>Scientist1</p>
                                                            </div>
                                                        </div>
                                                        <div className='item'>
                                                            <div className="ssp_eqp_crd_img">
                                                                <Image src={char2} fluid />
                                                                <p>Scientist2</p>
                                                            </div>
                                                        </div>
                                                        <div className='item'>
                                                            <div className="ssp_eqp_crd_img">
                                                                <Image src={char3} fluid />
                                                                <p>Scientist3</p>
                                                            </div>
                                                        </div>
                                                        <div className='item'>
                                                            <div className="ssp_eqp_crd_img">
                                                                <Image src={char4} fluid />
                                                                <p>Scientist4</p>
                                                            </div>
                                                        </div>
                                                        <div className='item'>
                                                            <div className="ssp_eqp_crd_img">
                                                                <Image src={card_lock} fluid />
                                                                <p>Scientist5</p>
                                                            </div>
                                                        </div>
                                                        <div className='item'>
                                                            <div className="ssp_eqp_crd_img">
                                                                <Image src={card_lock} fluid />
                                                                <p>Scientist6</p>
                                                            </div>
                                                        </div>
                                                        <div className='item'>
                                                            <div className="ssp_eqp_crd_img">
                                                                <Image src={card_lock} fluid />
                                                                <p>Scientist7</p>
                                                            </div>
                                                        </div>
                                                    </OwlCarousel>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div> 
                                    {/* } */}
                                
                                    <div className="starshp_equipmnt_right_box">
                                        <Row>
                                            <Col xs="12" md="2">
                                                <div className="ssp_eqp_face">
                                                    <div className="ssp_eqp_face_img">
                                                        <Image src={equp_txtuer_box} fluid className="equp_txtuer_box_img" />
                                                        <Image src={ssp_equp_face3} fluid className="equp_face_shield"></Image>
                                                    </div>
                                                    <div className="ssp_eqp_face_txt">
                                                        <p>Star warrior</p>
                                                        <span><b>3/</b>5</span>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xs="12" md="10">
                                                <div className="ssp_eqp_cards">
                                                    <Image src={equp_txtuer_bg} fluid className="equp_txtuer_bg_img" />
                                                    <OwlCarousel className='owl-theme ssp_eqp_cards_slider' items={6} margin={5} nav>
                                                        <div className='item'>
                                                            <div className="ssp_eqp_crd_img">
                                                                <Image src={char1} fluid />
                                                                <p>Star warrior1</p>
                                                            </div>
                                                        </div>
                                                        <div className='item'>
                                                            <div className="ssp_eqp_crd_img">
                                                                <Image src={char2} fluid />
                                                                <p>Star warrior2</p>
                                                            </div>
                                                        </div>
                                                        <div className='item'>
                                                            <div className="ssp_eqp_crd_img">
                                                                <Image src={char3} fluid />
                                                                <p>Star warrior3</p>
                                                            </div>
                                                        </div>
                                                        <div className='item'>
                                                            <div className="ssp_eqp_crd_img">
                                                                <Image src={char4} fluid />
                                                                <p>Star warrior4</p>
                                                            </div>
                                                        </div>
                                                        <div className='item'>
                                                            <div className="ssp_eqp_crd_img">
                                                                <Image src={card_lock} fluid />
                                                                <p>Star warrior5</p>
                                                            </div>
                                                        </div>
                                                        <div className='item'>
                                                            <div className="ssp_eqp_crd_img">
                                                                <Image src={card_lock} fluid />
                                                                <p>Star warrior6</p>
                                                            </div>
                                                        </div>
                                                        <div className='item'>
                                                            <div className="ssp_eqp_crd_img">
                                                                <Image src={card_lock} fluid />
                                                                <p>Star warrior7</p>
                                                            </div>
                                                        </div>
                                                    </OwlCarousel>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    
                                    <div className="starshp_equipmnt_right_box">
                                        <Row>
                                            <Col xs="12" md="2">
                                                <div className="ssp_eqp_face">
                                                    <div className="ssp_eqp_face_img">
                                                        <Image src={equp_txtuer_box} fluid className="equp_txtuer_box_img" />
                                                        <Image src={ssp_equp_face4} fluid className="equp_face_shield"></Image>
                                                    </div>
                                                    <div className="ssp_eqp_face_txt">
                                                        <p>Soldier</p>
                                                        <span><b>3/</b>5</span>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xs="12" md="10">
                                                <div className="ssp_eqp_cards">
                                                    <Image src={equp_txtuer_bg} fluid className="equp_txtuer_bg_img" />
                                                    <OwlCarousel className='owl-theme ssp_eqp_cards_slider' items={6} margin={5} nav>
                                                        <div className='item'>
                                                            <div className="ssp_eqp_crd_img">
                                                                <Image src={char1} fluid />
                                                                <p>Soldier1</p>
                                                            </div>
                                                        </div>
                                                        <div className='item'>
                                                            <div className="ssp_eqp_crd_img">
                                                                <Image src={char2} fluid />
                                                                <p>Soldier2</p>
                                                            </div>
                                                        </div>
                                                        <div className='item'>
                                                            <div className="ssp_eqp_crd_img">
                                                                <Image src={char3} fluid />
                                                                <p>Soldier3</p>
                                                            </div>
                                                        </div>
                                                        <div className='item'>
                                                            <div className="ssp_eqp_crd_img">
                                                                <Image src={card_lock} fluid />
                                                                <p>Soldier4</p>
                                                            </div>
                                                        </div>
                                                        <div className='item'>
                                                            <div className="ssp_eqp_crd_img">
                                                                <Image src={card_lock} fluid />
                                                                <p>Soldier5</p>
                                                            </div>
                                                        </div>
                                                        <div className='item'>
                                                            <div className="ssp_eqp_crd_img">
                                                                <Image src={card_lock} fluid />
                                                                <p>Soldier6</p>
                                                            </div>
                                                        </div>
                                                        <div className='item'>
                                                            <div className="ssp_eqp_crd_img">
                                                                <Image src={card_lock} fluid />
                                                                <p>Soldier7</p>
                                                            </div>
                                                        </div>
                                                    </OwlCarousel>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
            : <h1>gndsfjk</h1>
        }
        </>
    )
};