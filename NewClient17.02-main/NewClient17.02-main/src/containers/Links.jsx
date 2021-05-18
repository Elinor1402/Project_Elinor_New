import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { logoutAction } from '../actions/usersActions';
import DropDown from './DropdownNav'
import {Collapse, List,Item, NavLink} from '../style/navbar.js';



export default function Links () {

    const isLogged = useSelector(state => state.usersReducer.isLogged);
    const dispatch=useDispatch();

        let loginLink =   <NavLink to="/login" className= 'nav-link'> התחברות</NavLink> 
        if(isLogged === true) {
        loginLink =  <NavLink to="/login"  className= 'nav-link' onClick={()=>dispatch(logoutAction())}>יציאה</NavLink>
        }
        return (
            <React.Fragment>
                <NavLink to="/" className="navbar-brand">
                   דף ראשי
                </NavLink>
                <Collapse>
                    <List>
                    <Item>
                    {loginLink}
                    </Item>
                    <Item>
                        <NavLink to="/register" className= 'nav-link'>
                               הרשמה לאתר
                         </NavLink>
                    </Item>

                        <Item>
                            <NavLink to="/users/list" className= 'nav-link'>
                                רשימת משתמשים
                            </NavLink>
                        </Item>

                        <Item>
                            <NavLink to="/uploadFiles" className= 'nav-link'>
                                העלאת קבצים
                            </NavLink>
                        </Item>

                        <Item>      
                            <DropDown/>
                        </Item>  

                    </List>
                </Collapse>
            </React.Fragment>
        )    
    }
