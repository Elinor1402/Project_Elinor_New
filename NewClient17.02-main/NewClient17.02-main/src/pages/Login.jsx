import React, { useState, useEffect } from 'react';
import { loginAction } from '../actions/usersActions';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';
import { Title, Wrapper,  Label, InputText, Button , CancelButton} from '../style/style.js';
import { FaEye, FaEyeSlash} from 'react-icons/fa';


export default function Login()
{
    const history = useHistory();
    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');
    const isLogged = useSelector(state => state.usersReducer.isLogged);
    const dispatch=useDispatch();

    useEffect(() => {
       if(isLogged)
        history.push('/')
      }, [isLogged]); 

      const [passwordShown, setPasswordShown] = useState(false);
      
      
      const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
      };


   const handleChangeInputUsername=event=>{
        const username = event.target.value
        setUsername(username)
    }

     const  handleChangeInputPassword=async event=>{
        const password = event.target.value
        setPassword(password)
    }

        return (
            <Wrapper>
            <Title>התחברות</Title>
            <Label>:שם משתמש</Label>
            <InputText
                type="text"
                placeholder="הכנס שם משתמש"
                value={username}
                onChange={handleChangeInputUsername}
            />

            <Label>:סיסמה</Label>
           
            <i onClick={togglePasswordVisiblity}>{passwordShown ?  <FaEye/>:<FaEyeSlash/>}</i>
            <InputText
                //  type="password"
                 type={passwordShown ? "text" : "password"}
                 placeholder="הכנס סיסמה"
                 value={password}
                onChange={handleChangeInputPassword}
            />
           
            <Button onClick={()=>dispatch(loginAction(username,password))}>התחבר</Button>
            <CancelButton href={'/'}>ביטול</CancelButton>
        </Wrapper>
            
        )
    }






