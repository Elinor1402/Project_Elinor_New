
import api from '../services/userService'
import { setUserSession,removeUserSession  } from '../Utils/Common';

export const loginAction = (username, password) => {
    return async (dispatch) => {
            const payload = { username, password}
    
            await api.LoginUser(payload).then(res => {
                setUserSession(res.data.token, res.data.user);
                window.alert(`Login successful`)
               const isLogged = true
               return dispatch({
                type: "LOGIN",
                payload: isLogged 
                })
        })
            .catch(error => {  
                var response =JSON.stringify(error.response.data.message)
                window.alert(response+ " status: "+error.response.status);
               
            })
        }    
    }  

export const logoutAction = () => {
    removeUserSession();
    const isLogged = false
    return {
        type: "LOGIN",
        payload: isLogged
    }
}

