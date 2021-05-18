import React, { useState, useEffect } from 'react';
import api from '../services/userService'
import {Label,Button,Wrapper,InputText, Wrapper2,Label2,CancelButton} from '../style/files_upload.js';
import CreateTree from '../TreeStructure/Tree'
// import {MenuItems} from '../components/ContextMenu'
import CustomContext from '../containers/CustomContext'
import {SourcePath,DestPath} from '../containers/CustomContext'


export default function FilesUpload()
{

    // const [ selectedFile,SetselectedFile]=useState(null);
    const [ selectedFiles,SetselectedFiles]=useState(null);
    const [ directory,SetDirectory]=useState("/");
    // const AllFiles=[];
    const [AllFiles,SetAllFiles]=useState([]);
    const [uploadFile,SetUploadFile]=useState(false);
    const [folders, Setfolders]=useState("/");


    // const itemCallback=()=> {
    //     alert('clicked on Item 1')
    //     }
        
    // const item2Callback=()=> {
    //     alert('clicked on Item ')
    //     }

    


    const handleChangeInputDirectory = async event => {
        const dir = event.target.value
        SetDirectory(dir);
    }

    const handleChangeDestLocation = async event => {
        const dirloc = event.target.value
       Setfolders(dirloc);
    }

    useEffect(()=>{
        // window.alert("hello")
        async function CreateFiles()
         {
            //  console.log("the directory is",directory)
             await api.GetAllFiles(directory).then(res => { 
                    // console.log("response",res.data.data)
                    
                    if(res.data.data.length!=0)
                    {
                        SetAllFiles([]);
                        SetAllFiles(AllFiles => [...AllFiles, res.data.data])  
                        SetUploadFile(false)
                        // console.log("Files",AllFiles)     
                    }     
             })
          
         }
        //  if(AllFiles.length==0)
        CreateFiles();
     },[directory,uploadFile])


    // const handleFile = async () => {
    //     const data = new FormData() 
    //     data.append('dataFile', selectedFile)
    //     await api.FileUpload(data).then(res => {

    //         window.alert(res.data.message+ " status: "+res.status)  
    //    })
    //    .catch(error => {  
    //        var response =JSON.stringify(error.response.data.error)
    //        window.alert(response+ " status: "+error.response.status);
                 
    //    })
    // }
    
    const handleFiles = async () => {
        const data = new FormData()
        if(selectedFiles!==null)
        {
            for(var x = 0; x<selectedFiles.length; x++) {
                data.append('dataFiles', selectedFiles[x])
            }
        }
        else
        {
            data.append('dataFiles', selectedFiles)
        }
        await api.FilesUpload(data,directory).then(res => {

            window.alert(res.data.message+ " status: "+res.status) 
            if(res.status==200)
            SetUploadFile(true);
       })
       .catch(error => {  
           var response =JSON.stringify(error.response.data.error)
           window.alert(response+ " status: "+error.response.status);
                 
       })
    }

    const CreateNewDir = async () => {
       
       await api.CreateDir(DestPath).then(res=>{
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

   const DleleteExistDir = async () => {
    // console.log(folders)
   await api.DeleteDir(DestPath).then(res=>{
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

const MoveExistDir = async()=>{
    await api.MoveDir(directory,folders).then(res=>{
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

const PasteExistDir = async()=>{
    console.log("Source",SourcePath);
    console.log("Dest",DestPath);
   
    await api.PasteDirs(SourcePath,DestPath).then(res=>{
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

const CopyExistDir = async()=>{
    if(SourcePath=='/')
    window.alert('not selected file/folder')
}
    


const DownloadFile = async()=>{
      
    await api.Downloads(DestPath).then(res=> {

        const Destination=DestPath.replace(/\\/g, "/");

        const regexp =/\/[^\/].*/;

        window.open('http://localhost:8080'+Destination.match(regexp)[0]);

        // window.location.href =  'http://localhost:8080'+Destination.match(regexp)[0];
    })
    .catch(error => {  
        window.alert(error)
    }); 

}
const RenameFile = async()=>{
    await api.Rename(SourcePath,DestPath).then(res=>{
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
    const  onChangeInputFiles= event=>{
        // event.target.files

        // SetDirectory("/")

        if(maxSelectFile(event) && checkFileSize(event))
        SetselectedFiles(event.target.files)
        // console.log(event.target.files)
    
    }

    const maxSelectFile= event=>{
        let files = event.target.files // create file object
            if (files.length > 5) { 
               const msg = 'Only 5 files can be uploaded at a time'
               event.target.value = null // discard selected file
               window.alert(msg)
              return false;
     
          }
        return true;
     
     }

     const checkFileSize= event=>{
        let files = event.target.files
        //size in bytes
        let size = 9 * 1000 * 1000;
        let err = ""; 
        for(var x = 0; x<files.length; x++) {
        if (files[x].size > size) {
         err += files[x].type+'is too large, please pick a smaller file\n';
       }
     };
     if (err !== '') {
        event.target.value = null
        window.alert(err)
        return false
   }
   
   return true;
   
   }

   
   const [MenuItems, setMenuItems]=useState([{label:'copy', callback: CopyExistDir},
   {label: 'paste', callback: PasteExistDir},{label:'delete', callback: DleleteExistDir},
   {label:'New', callback: CreateNewDir},{label:'move', callback: MoveExistDir},{label:'Download', callback:DownloadFile },
   {label:'Rename', callback:DownloadFile}])


    return (
        <>
        <Wrapper>
            {console.log('Menuitems', MenuItems)}

         {AllFiles.length!=0 && (CreateTree(AllFiles[0],MenuItems))}
      
         {CustomContext(MenuItems)}

            {/* {console.log('path',Tree.path)} */}
        {/* <label>Select your file:</label>
        <input type="file" name="dataFile" onChange={onChangeInputFile}/>
        <button type="button" class="btn btn-success btn-block" onClick={handleFile}>Upload</button>  */}
        {/* <Label>נתיב שבו נמצאים</Label> */}
        <InputText type="text" placeholder="נתיב שבו נמצאים" value={directory} id="directory" onChange={handleChangeInputDirectory}/>

       {/* {console.log('C:/project/NewServer17.02-main/NewServer17.02-main/server/controllers/public/Certificate2.docx')} */}
        {console.log("AllFiles are:",AllFiles)}
       {/* { console.log("the directory is",directory)} */}
        {/* {console.log('Bearer '.concat(getToken()))} */}
        {/* {AllFiles.length!=0 && (CreateTree(AllFiles[0],MenuItems))} */}

       </Wrapper>

       <Wrapper2>
       {/* <Label2>בחר קבצים להעלאה</Label2> */}
        <input type="file" name="dataFiles" multiple onChange={onChangeInputFiles}/>
        <Button type="button" onClick={handleFiles}>Upload</Button> 

       {/* <Label2>יצירת תיקיות</Label2> */}
        <InputText type="text" placeholder="הכנס נתיב יעד לשלל פעולות" value={folders} id="folders" onChange={handleChangeDestLocation}/>

        <Button type="button" onClick={CreateNewDir}>Create</Button>
        <Button type="button"  style={{width:"40%"}} onClick={CopyExistDir}>Copy+Rename</Button>

        <CancelButton onClick={DleleteExistDir}>Delete</CancelButton>
        <CancelButton style={{width:"40%"}} onClick={MoveExistDir}>Move+Rename</CancelButton>
       </Wrapper2>

       <Wrapper>
       <Button type="button" style={{width:"40%"}} onClick={DownloadFile}>Downloads</Button>
       </Wrapper>
       </>

    )
    
}