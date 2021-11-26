import '../assets/css/header.css';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Image } from 'react-bootstrap';

import sparkLogo from '../assets/images/spark_logo.png';
import { Link } from 'react-router-dom';
import Web3 from 'web3';
export default function LoginHeader() {
    const openMatamask = async ()  =>{
        var token = JSON.parse(localStorage.getItem('loginToken'))
        console.log("A",token.token);
        token = "Bearer "+token.token;
        console.log("TEST");
        let data;
        await window.ethereum.enable().then((address) => {
            data = address[0]
            console.log(address,'this is the data we got ')
        });
        console.log("TEST12", data, 'this status');
        console.log("TEST121113");
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': token},
            body: JSON.stringify({ metaMaskAddress: data})
        };
        await fetch('https://firework-ndm.herokuapp.com/api/address', requestOptions)
            .then((response) => {
               console.log(response); 
            });
            
            // .then(data => this.setState({ metaMaskAddress: data }));
        
    }
    return (
        <>
            <Navbar className="navbar_menu login_menu" expand="lg">
                <Container fluid className="px-4">
                    <Link to="/" className="navbar-brand">
                        <Image src={sparkLogo} fluid className="spark_logo"></Image>
                    </Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <ul className="list-inline ms-auto mb-0 login_menu_btns">
                            <li className="list-inline-item">
                                <Link to="/" className="login_menu_btn nav-link">
                                    Language
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="/" className="login_menu_btn nav-link" onClick={openMatamask}>
                                    Wallet
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="/" className="login_menu_btn nav-link">
                                    White Paper
                                </Link>
                            </li>
                        </ul>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
};