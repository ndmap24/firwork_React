
import { Container, Col, Row, Form, InputGroup, FormControl, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Component} from 'react';
import LoginHeader from './LoginHeader';
import teen_esrb from '../assets/images/teen_esrb.png';
import { render } from '@testing-library/react';
import axios from 'axios';

export default class Login extends Component{
// export default function Login() {
    
    componentDidMount(){
        var login_token = JSON.parse(localStorage.getItem('loginToken'));

        if(login_token == null || login_token == undefined){
            this.setState({login:false})
        }
        else{
            if(login_token.login == true){
                this.setState({login:true})
            }
            else{
                this.setState({login:false});
            }
        }

    }

    constructor(props){
        super(props);
        this.state ={
            email:'',
            login:false
        }
    }
    
   
    submitHandler =e =>{
        e.preventDefault()
        console.log(this.state);
        axios.post('https://firework-ndm.herokuapp.com/api/login',this.state)
        .then(response =>{
            console.log("response",response);
            localStorage.setItem('loginToken',JSON.stringify(({
                'login':true,
                'token':response.data.token
            })))
            this.setState({login:true})
        })
        .catch(error =>{
            console.log("error",error);
        })
    }
    changeHandler = e =>{
        this.setState({[e.target.name]:e.target.value})
    }
    render(){
        const {email} = this.state; 
        // var localStorage = JSON.parse(localStorage.getItem('loginToken'));
        // console.log("A",localStorage);
        // var loginCheck = false;
        // if(localStorage == null || localStorage == undefined){
        //     loginCheck = false
        // }
        // else{
        //     if(localStorage.login == true){
        //         loginCheck = true;
        //     }
        //     else{
        //         loginCheck = false;
        //     }
        // }
        return (
            <div className="login_page">
                <LoginHeader />
                <section className="login_page_top">
                    <Container fluid className="px-4">
                        <Row>
                            <Col xs="12" md="8">
                                <div className="login_top_text">
                                    <h1>Your Era Journey Starts Here</h1>
                                    <p>Join SPARK ERA and become the greatest Star Trailblazer ever!</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className = "login_reserv mt-4">
                    <Container fluid className="px-4">
                        <Row>
                            <Col xs="12" md="4">
                                <div className="reserv_form">
                                    <Form onSubmit={this.submitHandler}>
                                        <InputGroup className="mb-3 reserv_field">
                                            <FormControl
                                                value={email} onChange={this.changeHandler} name="email" 
                                                placeholder="ENTER YOUR EMAIL HERE"
                                                aria-label="ENTER YOUR EMAIL HERE"
                                                aria-describedby="basic-addon2"
                                            />
                                            <Button as="input" type="submit" value="RESERVATION" className="reserv_field_btn" />
                                        </InputGroup>
                                        {/* <input value={email} onChange={this.changeHandler} name="email" placeholder="ENTER YOUR EMAIL HERE">
                                        </input>
                                        <button type="submit">
                                                RESERVATION
                                        </button> */}
                                    </Form>
                                </div>
                                {
                                    !this.state.login?
                                    // <div className="link_btn">
                                    //     <Link to="/tech-center" className="recut_link">RECRUIT</Link>
                                    // </div>
                                    <h1></h1>
                                    :
                                    <div className="link_btn">
                                        <Link to="/tech-center" className="recut_link">RECRUIT</Link>
                                    </div>
                                }
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="bottom_teen_brand">
                    <Container fluid className="px-4">
                        <div className="teen_esrb_box">
                        <div className="teen_esrb_img">
                            <Image src={teen_esrb} fluid></Image>
                        </div>
                        <div className="teen_esrb_content">
                            <p>Blood</p>
                            <p>Fantasy Violence</p>
                            <p>Mild Suggestive Theme</p>
                            <p>Use of Alcohol and Tobacco</p>
                            <p>Online Interactions Not Rated by the ESRB</p>
                        </div>
                        </div>
                    </Container>
                </section>
            </div>
        );
    }
    
// };
}