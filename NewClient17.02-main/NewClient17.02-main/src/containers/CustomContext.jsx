import React, { useState, useEffect, createRef } from 'react';
import { FaCommentsDollar } from 'react-icons/fa';
import  '../style/menucontent.css'
import {SelectedPath} from '../TreeStructure/Tree'

export let contextMenu=false;

export let SourcePath='/';
export let DestPath='/';
export let Rename= false;

export default function CustomContext(props)
{
    const [contextProps, setContextProps]=useState({visible: false,x:0, y:0})
    const [contextRef,setContextRef]=useState(createRef())
    //  enter=false
   
    useEffect(function setupListener(){

      //check right click
    document.addEventListener('contextmenu',handleRightClick);
        //check left click
    // if(!contextProps.visible)

    document.addEventListener('click', closeMenu);

},[])

const  handleRightClick=(event)=> {

  event.preventDefault();
  const clickX = event.clientX;
  const clickY = event.clientY;
  setContextProps({ visible: true, x: clickX, y: clickY });
  // {console.log('visible',contextProps.visible)}
  contextMenu=true;
}

const closeMenu=()=>{
 
  setContextProps({ visible: false, x:0, y:0});
  contextMenu=false;
  Rename=false;

}

const  handleLeftClick=(event)=> {

  if(contextRef.current.id=='customcontext'){
    click(event.target.getAttribute('index'));
  }
  event.preventDefault();
  setContextProps({ visible: false, x:0, y:0});
  contextMenu=false;
}

const click=(index) =>{

  if(props[index].callback)
  {
    switch(props[index].label){
      case 'copy':{
        SourcePath=SelectedPath;
        props[index].callback();
        break;}
      case 'paste':{
        DestPath=SelectedPath;
        props[index].callback();
        break;}
      case 'delete':{
        console.log('delte')
        DestPath=SelectedPath;
        props[index].callback();
        break;}
      case 'Download':{
        DestPath=SelectedPath;
        props[index].callback();
        break;}
      case 'New':{
        DestPath=SelectedPath;
        props[index].callback();
      break;}
      case 'Rename':{
        SourcePath=SelectedPath;
        Rename=true;
      break;}
        default:
    }
}
else{
  console.log('callback not registered for the menu item')
}
  
}

const returnMenu = (items) => {
    var myStyle = {
    position: `absolute`,
    top:`${contextProps.y}px`,
    left:`${contextProps.x+5}px`
    }

    return <div className='custom-context' id='customcontext' style={myStyle} ref={contextRef}>
    {items.map((item, index, arr) =>{
 
     if(arr.length-1==index){
    return <div key={index} className='custom-context-item-last' index={index} onClick={handleLeftClick}>{item.label}</div>
    }else{
     return <div key={index} className='custom-context-item' index={index} onClick={handleLeftClick} >{item.label}</div>
    }
 })}
 </div>;
    
    }

    
        return (
        <div id='cmenu'>
        {/* {console.log('the props',contextProps)}
        {console.log('the props',contextProps.visible)} */}
        {/* {console.log('props items',this.props.items)} */}
        {contextProps.visible ? returnMenu(props): null}
        </div>
        )
        
}
