import { useState,useEffect } from "react";



const Resize = () => {
  const[Screensize,setScreensize]=useState({
    width:window.innerWidth,
    hight:window.innerHeight
  })
  const UpadateScreensize=()=>{
    setScreensize({
      width:window.innerWidth,
      hight:window.innerHeight
    });

  };
  useEffect(()=>{
    window.addEventListener('resize',UpadateScreensize);
    return()=>{
      window.addEventListener('resize',UpadateScreensize);
  
    }
  },[])
  return(
    <div>
      <h1><center>Hello welcome to react js</center></h1>
     <center> <h3>Resize the window to know the screen size</h3></center>
     <center><h4 style={{color:'blueviolet'}}>screenWidth:{Screensize.width}</h4></center>
     <center><h4 style={{color:'blueviolet'}}>screenHight;{Screensize.hight}</h4></center>
    </div>
  )
     
}



export default Resize;
