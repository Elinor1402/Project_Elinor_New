
import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Container = styled.div.attrs({
    className: 'container',
})`
    flex:1;
    width: 100%;
    // @media (min-width: 100%)!important {
    //     flex:1;
    //   }
    // @media (max-width: 1140px)!important {
    //     flex:1;
    //   }
`

export const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg  navbar-light ',
})`
    width: 100%;
    background-color:#188f2b;
    box-shadow: 0 .5rem .5rem rgb(20, 20, 31);
    // box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
    // flex-wrap: none;
  border: 5px solid green;

`
export const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

export const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

export const Item = styled.div.attrs({
    className: 'nav-item',
})`
`

export const NavLink = styled(Link)
`
  color: black !important;
  padding-top: 2vh !important;
  font-weight: bold;
  font-family: Helvetica, Arial, sans-serif;

&:hover {
  text-decoration: underline !important;
  color: #004d00 !important;
}
&.active {
  color: black !important;
}
`;

export const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})`
`

// const Logo = styled.img`
//   border: 1px solid #000;
//   background-image: url(${Logoimg});
// `;
