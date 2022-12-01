import React from 'react'
import { FiHelpCircle } from 'react-icons/fi'
import "./Helpcenter.css"
import { IconContext } from 'react-icons'
import { BsArrowBarRight } from 'react-icons/bs'

export default function Helpcenter() {
  return (
    <div className='container-fluid' id='help'>
        <div className='iconhelp'>
            <IconContext.Provider value={{size:"25px", color:"black"}}>
            <i><FiHelpCircle/></i>


            </IconContext.Provider>
            <div className='desctiptionhelp'>
                <h6>Helpcenter</h6>  
            </div>
            
        </div>
        
        <div className='arrow-right'>
            <IconContext.Provider value={{size:"25px", color:"black"}}>
                <i><BsArrowBarRight/></i>
            </IconContext.Provider>
            </div>  

    </div>
  )
}
