import React from 'react'
import Logo from './Logo'
import Links from './Links'
import {Container, Nav} from '../style/navbar.js';

function  NavBar () {

    return (
        //בלי הקונטינר אז התפריט יהיה ברוחב כל הדף
        <Container>
                <Nav>
                    <Logo />
                    <Links />
                </Nav>       
       </Container>   
    )
}
export default NavBar