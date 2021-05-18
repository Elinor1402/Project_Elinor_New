import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Main = styled("div")`
  font-family: Helvetica, Arial, sans-serif;
//   font-size: 20px;
  height: 7vh;
`;
export const Container = styled.div.attrs({
    className: 'container',
})`
    flex:1;
    width: 100%;
`
export const DropDownContainer = styled("div")`
  width: 6.0em;
  margin: 0 auto;
`;

export const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding-top: 2vh !important;
//   padding:0.75em 2em 0.4em 0.4em;
  font-weight: 100;
  font-size: 1.0rem;
`;

export const DropDownListContainer = styled("div")``;

export const DropDownList = styled("ul")`
  position: relative;
  z-index: 1;
  padding: 0;
  margin: 0;
  background-color: #188f2b;
  box-sizing: border-box;
  border: 5px solid green;
  font-size: 1.0rem;
  font-weight: 100;

`;

export const Heading = styled.i.attrs({
    //from Font Awesome site
    className: `dropdown-toggle`,
})`
    font-style: normal;
    font-weight: bold;
    font-family: Helvetica, Arial, sans-serif;  
    color:black;
`
export const DropdownLink = styled(Link)
`
  color: black !important;
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