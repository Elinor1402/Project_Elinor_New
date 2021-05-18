import styled from "styled-components";
import React, { useState, useEffect } from 'react';

import { FaFile, FaFolder, FaFolderOpen, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import {contextMenu,Rename} from '../../containers/CustomContext';

import {InputText} from '../../style/files_upload.js';


import {DragDropContext} from 'react-beautiful-dnd';

export let SelectedPath='/';

const StyledTree = styled.div`
  line-height: 1.5;
`;


const StyledFile = styled.div`
  padding-left: 20px;
  display: flex;
  align-items: center;
  span {
    margin-left: 5px;
  }
  &:hover {
    background: lightgray;
  }
`;
const StyledFolder = styled.div`
  padding-left: 20px;
  // color:red
  .folder--label {
    display: flex;
    align-items: center;
    span {
      margin-left: 5px;
    }
    &:hover {
      background: lightgray;
    }
  }
`;

// const Collapsible = styled.div`

//   ${props => props.isOpen ?
//     `
//     display: flex;
//     // flex-direction: column;
//     ` :
//   ` display: none;`
//   }
// `;
const Collapsible = styled.div`
  height: ${p => (p.isOpen ? "auto" : "0")};
  overflow: hidden;
`;

const SetSelectedPathToRename = async event => {
 SelectedPath=event.target.value;
}


const File = ({ name, filePath }) => {

  const [isOver,setIsOver]=useState(false);

  const mouseOver =() => {
    if(!contextMenu){
    SelectedPath=filePath;
    setIsOver(true);
    console.log("currently over",filePath,isOver)
    // console.log('Selected',SelectedPath);
    }
  };

  const returnRenameMenu =()=>{

    if(isOver && Rename){
      return <InputText type="text" placeholder="שם חדש" value={SelectedPath} id={filePath} onChange={SetSelectedPathToRename}/>
    }
      else{

        return <span>{name}</span>
    }
  }
    return (
      <StyledFile onMouseOver={mouseOver}>
        <FaFile />
        {returnRenameMenu()}
      </StyledFile>
    );
  };

  const Folder = ({ name, childrens, folderPath }) => {

    const [isOver,setIsOver]=useState(false);

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = e => {
      e.preventDefault();
      setIsOpen(!isOpen);

    };

    const mouseOver =e => {
      e.preventDefault();
      if(!contextMenu){
          SelectedPath=folderPath;
          setIsOver(true);
          console.log("currently over",folderPath, isOver)
          // console.log('Selected',SelectedPath);
      }
    }

    const returnRenameMenu =()=>{

      if(isOver && Rename){
        return <InputText type="text" placeholder="שם חדש" value={SelectedPath} id={folderPath} onChange={SetSelectedPathToRename}/>
      }
        else{

          return <span>{name}</span>
      }

    }
    return (
        <StyledFolder>
           
        <div className="folder--label" onMouseOver={mouseOver} onClick={handleToggle}>

          {isOpen? <><FaChevronRight /><FaFolderOpen /></>: <><FaChevronDown /><FaFolder /></> }
          
         {returnRenameMenu()}
        </div>

       <Collapsible isOpen={isOpen}>
         
              {childrens}

        </Collapsible>

      </StyledFolder>
    );
  };



  const CreateTree = (data) => {
    
    return (<StyledTree>{TreeRecursive(data)}</StyledTree>);
   
  };

  const TreeRecursive = (data) => {
    // console.log("TreeR", data)

    return data.map((item ,i)=>{
  
      if (item.type === 'file') {

        // console.log("file",item.name)
      
        return <File name={item.name} filePath={item.path} key={i}/>;
      }
      // if its a folder render <Folder />
      if (item.type === 'folder') {

        // console.log("folder")
        return (
          <Folder name={item.name} childrens={TreeRecursive(item.childrens)} folderPath={item.path} key={i}>
            {/* Call the <TreeRecursive /> component with the current item.childrens */}    
          </Folder>
        );
      }
    });
  }
      // if its a file render <File />
  export default CreateTree;
  