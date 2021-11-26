import { Col, Container, Row, Image } from 'react-bootstrap';
import '../assets/css/style.css';
import Header from './header';
import axios from 'axios';
import {Component} from 'react';
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

export default class StarshipEquipment extends Component{

// export default function StarshipEquipment() {

    constructor(props){
        super(props);
        this.state ={
            show:false,
            isLoading:true,
            starShipArr:[],
            oneStarShip:[],
            initiatePower1:0,
            initiateOpenSlotNumber1:[],
            MaxSlotsNumber1:[],
            commander1 : '',
            countCommander:0,
        }
    }
    

    componentWillMount(){
        axios.get('https://firework-ndm.herokuapp.com/api/getAllStarShip')
        .then(response =>{
            console.log("response",response);
            this.setState({starShipArr:response.data});
            console.log("starShipArr",this.state.starShipArr);
            this.setState({oneStarShip:response.data.data[4]});
            console.log("onestartship",this.state.oneStarShip);
            this.setState({initiateOpenSlotNumber1:response.data.data[4].initiateOpenSlotNumber});
            console.log("initiateOpenSlotNumberfgla",response.data.data[4].initiateOpenSlotNumber);
            this.setState({MaxSlotsNumber1:response.data.data[4].MaxSlotsNumber});
            this.setState({countCommander:response.data.data[4].initiateOpenSlotNumber[4].commander});
            console.log("commonder1",response.data.data[4].initiateOpenSlotNumber[4].commander);
            
            this.setState({isLoading:false});
            function commanders(){
                let st = ''
                for(let i = 0; i< response.data.data[0].initiateOpenSlotNumber[0].commander; i++){
                    st += '<div className="item"><div className="ssp_eqp_crd_img"> <img src ='+ char1 +' fluid /> <p>Commander '+ (i+1) +'</p> </div></div>'
                }
                for(let i = 0; i< response.data.data[0].MaxSlotsNumber[0].commander - response.data.data[0].initiateOpenSlotNumber[0].commander; i++){
                    st += '<div className="item"><div className="ssp_eqp_crd_img"><img src='+card_lock +' fluid /><p>Commander '+(i+1)+'</p></div></div> '
                }
                console.log(st, 'sdfsdf');
                document.getElementById('commanderCount').innerHTML = st;
            }
            commanders();

            function soldiers(){
                let st = ''
                for(let i = 0; i< response.data.data[0].initiateOpenSlotNumber[0].soldier; i++){
                    st += '<div className="item"><div className="ssp_eqp_crd_img"> <img src ='+ char2 +' fluid /> <p>Soldier '+ (i+1) +'</p> </div></div>'
                }
                for(let i = 0; i< response.data.data[0].MaxSlotsNumber[0].soldier - response.data.data[0].initiateOpenSlotNumber[0].soldier; i++){
                    st += '<div className="item"><div className="ssp_eqp_crd_img"><img src='+card_lock +' fluid /><p>Soldier '+(i+1)+'</p></div></div> '
                }
                console.log(st, 'sdfsdf');
                document.getElementById('soldierCount').innerHTML = st;
            }
            soldiers();
            // function lock_Commander(){
            //     let st = ''
            //     for(let i = 0; i< response.data.data[0].MaxSlotsNumber[0].soldier; i++){
            //         st += '<div className="item"><div className="ssp_eqp_crd_img"><img src='+card_lock +' fluid /><p>Commander '+(i+1)+'</p></div></div> '
            //     }
            //     console.log(st, 'sdfsdf');
            //     document.getElementById('lock_Commander_count').innerHTML = st;
            // }
            // lock_Commander()
            
        })
        .catch(error =>{
            console.log("error",error);
        })
    }


    componentDidMount(){
        axios.get('https://firework-ndm.herokuapp.com/api/getAllStarShip')
        .then(response =>{
            console.log("response",response);
            this.setState({starShipArr:response.data});
            console.log("starShipArr",this.state.starShipArr);
            this.setState({oneStarShip:response.data.data[0]});
            console.log("onestartship",this.state.oneStarShip);
            this.setState({initiateOpenSlotNumber1:response.data.data[0].initiateOpenSlotNumber});
            console.log("initiateOpenSlotNumberfgla",response.data.data[0].initiateOpenSlotNumber);
            this.setState({MaxSlotsNumber1:response.data.data[0].MaxSlotsNumber});
            this.setState({countCommander:response.data.data[0].initiateOpenSlotNumber[0].commander});
            console.log("commonder1",response.data.data[0].initiateOpenSlotNumber[0].commander);
            // localStorage.setItem('loginToken',JSON.stringify(({
            //     'login':true,
            //     'token':response.data.token
            // })))  
            this.setState({isLoading:false})
            function commanders(){
                let st = ''
                for(let i = 0; i< response.data.data[0].initiateOpenSlotNumber[0].commander; i++){
                    st += '<div className="item"><div className="ssp_eqp_crd_img"> <img src= '+char1+' fluid /> <p>Commander '+ (i+1) +'</p> </div></div>'
                }
                for(let i = 0; i< response.data.data[0].MaxSlotsNumber[0].commander- response.data.data[0].initiateOpenSlotNumber[0].commander; i++){
                    st += '<div className="item"><div className="ssp_eqp_crd_img"><img src='+card_lock +' fluid /><p style=""font-size": "14px";"font-weight": "300";"margin-bottom": "0";">Commander '+(i+1)+'</p></div></div> '
                }
                console.log(st, 'sdfsdf');
                document.getElementById('commanderCount').innerHTML = st;
            }
            commanders();
            function soldiers(){
                let st = ''
                for(let i = 0; i< response.data.data[0].initiateOpenSlotNumber[0].soldier; i++){
                    st += '<div className="item"><div className="ssp_eqp_crd_img"> <img src ='+ char2 +' fluid /> <p>Commander '+ (i+1) +'</p> </div></div>'
                }
                for(let i = 0; i< response.data.data[0].MaxSlotsNumber[0].soldier - response.data.data[0].initiateOpenSlotNumber[0].soldier; i++){
                    st += '<div className="item"><div className="ssp_eqp_crd_img"><img src='+card_lock +' fluid /><p>Soldier '+(i+1)+'</p></div></div> '
                }
                console.log(st, 'sdfsdf');
                document.getElementById('soldierCount').innerHTML = st;
            }
            soldiers();
            // function lock_Commander(){
            //     let st = ''
            //     for(let i = 0; i< response.data.data[0].MaxSlotsNumber[0].commander- response.data.data[0].initiateOpenSlotNumber[0].commander; i++){
            //         st += '<div className="item"><div className="ssp_eqp_crd_img"><img src='+card_lock +' fluid /><p style=""font-size": "14px";"font-weight": "300";"margin-bottom": "0";">Commander '+(i+1)+'</p></div></div> '
            //     }
            //     console.log(st, 'sdfsdf');
            //     document.getElementById('lock_Commander_count').innerHTML = st;
            // }
            // lock_Commander()
            
        })
        .catch(error =>{
            console.log("error",error);
        })
        
    }

    handleClose(){
        
    }
    setShow(){

    }
    handleShow(){

    }
    show(){}
    
    render(){
        return( 
        <>
          {this.state.isLoading === false ? (
            <div className="Starship_pages">
                <Header></Header>
                {/* <Pop show={show} setShow={setShow} handleClose={handleClose} handleShow={handleShow} /> */}
                <section className="px-4 my-5 d-inline-block w-100">
                    <Container fluid className="px-4">
                        <Row>
                            <Col xs="12" md="4">
                                <div className="startship_left_cont">
                                    <div className="stsp_equip_wepon_slider">
                                        <Carousel interval={null} >
                                            {this.state.starShipArr.data.map((name,pos) => (
                                                <Carousel.Item>
                                                    <Image key={pos} src={wepon1} className="stsp_equip_weapons_img" id={name._id}/>
                                                    {/* <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" id={name._id} onClick={this.prevFunction}>
                                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span class="sr-only">Previous</span>
                                                    </a>
                                                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" id={name._id}>
                                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span class="sr-only">Next</span>
                                                    </a> */}
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
                                            <span className="souvenir_percnt">20</span>
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
                                    {this.state.initiateOpenSlotNumber1[0].commander &&
                                        <div className="starshp_equipmnt_right_box">
                                    
                                            <Row>
                                                <Col xs="12" md="2">
                                                    <div className="ssp_eqp_face">
                                                        <div className="ssp_eqp_face_img">
                                                            <Image src={equp_txtuer_box} fluid className="equp_txtuer_box_img" />
                                                            <Image src={ssp_equp_face1} fluid className="equp_face_shield"></Image>
                                                        </div>
                                                        <div className="ssp_eqp_face_txt">
                                                            <p>Commander</p>
                                                            <span><b>{this.state.initiateOpenSlotNumber1[0].commander}/</b>{this.state.MaxSlotsNumber1[0].commander}</span>
                                                            {/* <span><b>1/</b>3</span> */}
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xs="12" md="10">
                                                    <div className="ssp_eqp_cards">
                                                        <Image src={equp_txtuer_bg} fluid className="equp_txtuer_bg_img" />
                                                        {/* <div id="ccc"> */}
                                                            {/* <div className='item'>
                                                                <div className="ssp_eqp_crd_img">
                                                                    <Image src={char1} fluid />
                                                                    <p>Commander1</p>
                                                                </div>
                                                            </div> */}
                                                        {/* </div> */}

                                                        {/* {this.state.commander1.map((name,pos) => (
                                                            // <Carousel.Item >
                                                            //     <Image src={wepon1} className="stsp_equip_weapons_img" key={pos} id={name._id} />
                                                                
                                                            // </Carousel.Item>
                                                            <div className='item'>
                                                                <div className="ssp_eqp_crd_img">
                                                                    <Image src={char1} fluid />
                                                                    <p>Commander1</p>
                                                                </div>
                                                            </div>
                                                        ))} */}
                                                        <OwlCarousel className='owl-theme ssp_eqp_cards_slider' items={6} margin={5} nav>
                                                            <div id="commanderCount"></div>
                                                            {/* <div id="lock_Commander_count"></div> */}
                                                            
                                                            {/* <div className='item'>
                                                                <div className="ssp_eqp_crd_img">
                                                                    <Image src={char1} fluid  />
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
                                                            </div> */}
                                                        </OwlCarousel>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    }
                                    {this.state.initiateOpenSlotNumber1[0].scientist &&  
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
                                                        {/* <span><b>3/</b>5</span> */}
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
                                    } 
                                    {/* {this.state.initiateOpenSlotNumber1[0].starWarrior &&   */}
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
                                    {/* } */}
                                    {this.state.initiateOpenSlotNumber1[0].soldier && 
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
                                                            {/* <span><b>3/</b>5</span> */}
                                                            <span><b>{this.state.initiateOpenSlotNumber1[0].soldier}/</b>{this.state.MaxSlotsNumber1[0].soldier}</span>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xs="12" md="10">
                                                    <div className="ssp_eqp_cards">
                                                        <Image src={equp_txtuer_bg} fluid className="equp_txtuer_bg_img" />
                                                        <OwlCarousel className='owl-theme ssp_eqp_cards_slider' items={6} margin={5} nav>
                                                            <div id="soldierCount">
                                                            
                                                            </div>
                                                            {/* <div className='item'>
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
                                                            </div> */}
                                                        </OwlCarousel>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    }   
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div> ) : <h1>done</h1>}
            </>
            )
        }
    }