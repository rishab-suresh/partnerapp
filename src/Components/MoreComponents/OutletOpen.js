import React from 'react'
import { IconContext } from 'react-icons'
import { BsArrowBarRight } from 'react-icons/bs'
import { GiDoor } from 'react-icons/gi'
import './OutletOpen.css'

export default function OutletOpen() {
    return (
        <div className='container-fluid' id='outlet-main'>

            <div className='container-fluid' id='outlet'>
                <div className='icondoor'>
                <GiDoor />
                <div className='outlettext'>
                    <h5>Outlet Open/ Close Timings</h5>
                </div>

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
