import React, { useEffect, useState } from 'react'
import "./Nav.css"

function Nav() {

    const [show,setShow]=useState(false);
    
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>500){
                setShow(true)
            }else{
                setShow(false)
            }
        })
    })
    console.log(show);






  return (
    <div className={`${show && 'nav-black'} nav`}>
        <img className='net' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""  width={'150px'}/>
        <img className='as' src="https://static.thenounproject.com/png/2438551-200.png" alt="" />

    </div>
  )
}

export default Nav