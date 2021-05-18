import axios from 'axios'
import {getToken} from '../Utils/Common';

const api = axios.create({
    
    baseURL: 'http://localhost:8080/api',
    headers: {
		'Content-Type': 'application/json',
        'Accept': 'application/json', 
        // 'Authorization': 'Bearer '.concat(getToken()),
	}
})


export const insertUser = payload => api.post(`/user`, payload,{headers: {
    'Authorization': 'Bearer '.concat(getToken())}})

export const getAllUsers = () => api.get(`/users`,{headers: {
    'Authorization': 'Bearer '.concat(getToken())}})
  

export const updateUserById = (id, payload) => api.put(`/user/${id}`, payload,{headers: {
    'Authorization': 'Bearer '.concat(getToken())}})

export const deleteUserById = id => api.delete(`/user/${id}`,{headers: {
    'Authorization': 'Bearer '.concat(getToken())}})

export const getUserById = id => api.get(`/user/${id}`,{headers: {
    'Authorization': 'Bearer '.concat(getToken())}})

export const registerUser = payload => api.post('/register', payload,{headers: {
    'Authorization': 'Bearer '.concat(getToken())}});

export const LoginUser = payload => api.post('/login', payload,{headers: {
    'Authorization': 'Bearer '.concat(getToken())}})

// export const Authuser= payload => api.get(`/token`)
export const FileUpload = payload => api.post('/uploadfile',payload)

export const FilesUpload = (payload, directory) => api.post('/uploadfiles',payload,{params:{directory},headers:{'Authorization': 'Bearer '.concat(getToken())}})

export const GetAllFiles = directory => api.get('/getfiles', {params:{directory},headers:{'Authorization': 'Bearer '.concat(getToken())}})

export const CreateDir = destination => api.post('/createdir', null, {params:{destination},headers:{'Authorization': 'Bearer '.concat(getToken())}})

export const DeleteDir = destination => api.delete('/deletedir',{params:{destination},headers:{'Authorization': 'Bearer '.concat(getToken())}})

export const MoveDir = (source,destination) => api.put('/movedir', null, {params:{source,destination},headers:{'Authorization': 'Bearer '.concat(getToken())}})

export const PasteDirs = (source,destination) => api.put('/pastedir', null, {params:{source,destination},headers:{'Authorization': 'Bearer '.concat(getToken())}})

export const Downloads = (destination) => api.get('/download',{params:{destination},headers:{'Authorization': 'Bearer '.concat(getToken())}})

export const Rename = (source, destination)=> api.put('/rename',null, {params:{source,destination},headers:{'Authorization': 'Bearer '.concat(getToken())}})



const apis = {
    insertUser,
    getAllUsers,
    updateUserById,
    deleteUserById,
    getUserById,
    registerUser,
    LoginUser,
    FilesUpload,
    FileUpload,
    GetAllFiles,
    CreateDir,
    DeleteDir,
    MoveDir,
    PasteDirs,
    Downloads,
    Rename,
}

export default apis