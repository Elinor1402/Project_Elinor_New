
import React from 'react'
// import logo from '../logo.svg'
import Logoimg from '../images/mamram.png';
import {Wrapper} from '../style/navbar.js';


// const Logo = styled.img`
//   border: 1px solid #000;
//   background-image: url(${Logoimg});
// `;

export default function Logo (){

    return (
        <Wrapper href="http://localhost:4000/">
            <img src={Logoimg} width="50" height="50"/>
        </Wrapper>
    )
}
