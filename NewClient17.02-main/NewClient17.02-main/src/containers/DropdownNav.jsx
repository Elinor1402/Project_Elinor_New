import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {MenuItems} from '../components/MenuItems'
import {Link} from 'react-router-dom';
import { Main, DropDownContainer,  DropDownHeader, DropDownListContainer, DropDownList , Heading, DropdownLink} from '../style/dropdown.js';
import  '../style/Dropdown.css'

export default function DropDown ()
{
  const isLogged = useSelector(state => state.usersReducer.isLogged);
  const [isOpen, setIsopen]= useState(false);
  const [selectedOption, setSelected_options]= useState('ממשקים וקישוריות');
  const toggling = () => setIsopen(!isOpen);

  const onOptionClicked = value => () => {
      setSelected_options(value)
      setIsopen(false);
    };   

    return (
        <Main>
      <DropDownContainer>
        <DropDownHeader onMouseOver={toggling}>
          {<Heading>{selectedOption}</Heading>}
        </DropDownHeader>
        {isOpen && isLogged && (
          <DropDownListContainer>
            <DropDownList>
              {MenuItems.map((option,i )=> (
                  <DropdownLink to={option.path} key={i} className={option.cName} onClick={onOptionClicked(option.title)}>  {option.title}
                  </DropdownLink>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
      
        );
    }
          


