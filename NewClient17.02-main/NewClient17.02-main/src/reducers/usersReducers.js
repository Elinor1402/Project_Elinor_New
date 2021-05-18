import { getToken} from '../Utils/Common';

const isLoggedLocalStorage = window.localStorage.getItem('isLogged');
const token = getToken();

const initState = {
    isLogged: (isLoggedLocalStorage !== null ? (isLoggedLocalStorage === 'true' && token!==null) : false)
}

const usersReducer = (state = initState, action) => {

    switch(action.type){
        case "LOGIN":
            window.localStorage.setItem('isLogged',action.payload);
            state = {...state, isLogged: action.payload}
        break;
        default:
        break;
    }

    console.log('Users Reducers', state);
    return state;
}

export default usersReducer;