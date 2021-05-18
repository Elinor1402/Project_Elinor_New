import React, { useState, useEffect } from 'react';
import api from '../services/userService'
import { Title, Wrapper,  Label, InputText, Button , CancelButton} from '../style/style.js';

export default function UsersUpdate(props) {

    const [id,setID]=useState(props.match.params.id);
    const [username, setUsername]=useState(props.match.params.username);
    const [password, setPassword]=useState('');
    const [role, setRole]=useState('');

    const handleChangeInputPassword = async event => {
        const password = event.target.value
        setPassword(password);
    }
    const handleChangeInputRole = async event => {
        const role = event.target.value
        setRole(role);
    }
    const handleUpdateUser = async () => {
        const payload = { username, password, role}

        await api.updateUserById(id, payload).then(res => {
            window.alert(res.data.message+ " status: "+res.status) 

            setUsername('');
            setPassword('');
            setRole('');
            // window.location.href = `/users/list`
                props.history.push('/users/list');
        })
        .catch(error => {  
            var response =JSON.stringify(error.response.data.error)
            window.alert(response+ " status: "+error.response.status);
                  
        })
    }
    useEffect(()=>{
        async function userInfo()
         {
            await api.getUserById(id).then(user => {       
                setUsername(user.data.data.username);
                setPassword(user.data.data.password);
                setRole(user.data.data.role);
            })
            .catch(error => {  
                var response =JSON.stringify(error.response.data.error);
                window.alert(response+ " status: "+error.response.status);
                    
            })

         }
         userInfo();
 
     },[id])

        return (
            <Wrapper>
                <Title>Update User</Title>

                <Label>Username: </Label>
                <p>{username}</p>

                <Label>Role: </Label>
                <InputText
                    type="text"
                    value={role}
                    onChange={handleChangeInputRole}
                />

                <Label>Password: </Label>
                <InputText
                    type="text"
                    value={password}
                    onChange={handleChangeInputPassword}
                />

                <Button onClick={handleUpdateUser}>Update User</Button>
                <CancelButton href={'/users/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }


