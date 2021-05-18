import api from '../services/userService'

const CopyExistDir = async()=>{
    await api.PasteDirs(directory,folders).then(res=>{
        window.alert(res.data.message+ " status: "+res.status)  
        if(res.status==200){
            SetUploadFile(true);
            SetDirectory(folders);
        }
       })
       .catch(error => {  
        var response =JSON.stringify(error.response.data.error)
        window.alert(response+ " status: "+error.response.status);
           
    })
}

export const MenuItems=[
{
    label:'copy', 
    callback: CopyExistDir
},
{
    label: 'paste', 
    callback: CopyExistDir
}
];