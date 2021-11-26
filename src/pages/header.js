import '../assets/css/header.css';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, Container, Image } from 'react-bootstrap';

import logo from '../assets/images/logo.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import menu_settings from '../assets/images/menu_settings.png';
import menu_home from '../assets/images/menu_home.png';
import menu_arrow from '../assets/images/menu_arrow.png';
import { Link } from 'react-router-dom';

// import '@fortawesome/fontawesome-svg-core/styles.css'

export default function Header() {
    const openMatamask = async ()  =>{
        var token = JSON.parse(localStorage.getItem('login'))
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
            <Navbar className="navbar_menu" expand="lg">
                <Container fluid className="px-4">
                    <Link to="/" className="navbar-brand">
                        <Image src={logo} fluid className="logo"></Image>
                    </Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className=""
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to="#" className="menu_links nav-link">Camp Introduction</Link>
                            <Link to="/startship" className="menu_links nav-link">Starship</Link>
                            <Link to="/interstellar_trader_treasured" className="menu_links nav-link">Interstellar Trader</Link>
                            <Link to="/tech-center" className="menu_links nav-link">Tech Center</Link>
                            <Link to="#" className="menu_links nav-link">NFT Trading Market</Link>
                            <Link to="#" className="menu_links nav-link">Star Chain</Link>
                            <Link to="/storage" className="menu_links nav-link">Storage</Link>
                            <Link to="#" className="menu_links nav-link">Game Download</Link>
                        </Nav>
                        <ul className="list-inline mb-0 mx-2">
                            <li className="list-inline-item mx-0">
                                <Link to="#" className="menu_icon nav-link">
                                    <Image src={menu_settings} fluid className="menu_icon_img"></Image>
                                </Link>
                            </li>
                            <li className="list-inline-item mx-0">
                                <Link to="/tech-center" className="menu_icon nav-link">
                                    <Image src={menu_home} fluid className="menu_icon_img"></Image>
                                </Link>
                            </li>
                            <li className="list-inline-item mx-0">
                                <Link to="#" className="menu_icon nav-link">
                                    <Image src={menu_arrow} fluid className="menu_icon_img"></Image>
                                </Link>
                            </li>
                        </ul>
                        <ul className="list-inline ms-auto mb-0">
                            <li className="list-inline-item">
                                <Link to="#" className="menu_btn nav-link">
                                    Language
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="#" className="menu_btn nav-link" onClick={openMatamask}>
                                    Wallet
                                </Link>
                            </li>
                        </ul>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
};
