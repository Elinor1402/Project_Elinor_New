import React, { useState, useEffect } from 'react';
import api from '../services/userService'
import { Title, Wrapper,  Label, InputText, Button , CancelButton} from '../style/style.js';

export default function UsersRegister(){
   
    const [username,setUsername]=useState('');
    const [password, setPassword]=useState('');
    const [password2, setPassword2]=useState('');
    const [role, setRole]=useState('');
        
    const handleChangeInputUsername = async event => {
        const username = event.target.value
        setUsername(username);
    }

    const handleChangeInputRole = async event => {
        const role = event.target.value
        setRole(role);
    }
    const handleChangeInputPassword = async event => {
        const password = event.target.value
       setPassword(password);
    }

    const handleChangeInputPassword2 = async event => {
        const password2 = event.target.value
        setPassword2(password2);
    }
    const handleRegisterUser = async () => {
        // window.alert(username)
        const payload = { username, password,password2,role}
       
        await api.registerUser(payload).then(res => {

             window.alert(res.data.message+ " status: "+res.status)  
            setUsername('');
            setPassword('');
            setPassword2('');

            window.location.href = `/` 
        })
        .catch(error => {  
            var response =JSON.stringify(error.response.data.error)
            window.alert(response+ " status: "+error.response.status);
                  
        })
    }
        return (
            <Wrapper>
                <Title>הרשמה</Title>

                <Label>:שם משתמש</Label>
                <InputText
                    type="text"
                    value={username}
                    id="username"
                    onChange={handleChangeInputUsername}
                />
                <Label>:תפקיד</Label>
                <InputText
                    type="text"
                    value={role}
                    id="username"
                    onChange={handleChangeInputRole}
                />

                <Label>:סיסמה</Label>
                <InputText
                     type="password"
                     value={password}
                     id="password"
                    onChange={handleChangeInputPassword}
                />
                <Label>:אישור סיסמה</Label>
                <InputText
                     type="password"
                     value={password2}
                     id="password2"
                    onChange={handleChangeInputPassword2}
                />

                <Button onClick={handleRegisterUser}>הרשם</Button>
                <CancelButton href={'/users/list'}>ביטול</CancelButton>
            </Wrapper>
        )
    }


