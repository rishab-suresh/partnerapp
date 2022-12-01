import React from 'react'
import "./logout.css"
import { BsPower } from 'react-icons/bs'
import { IconContext } from 'react-icons'
export default function Logout() {
    return (
        <div className='container-fluid' id='Logout'>
            <h4>Logout</h4>
            <IconContext.Provider value={{ size: "25px", color: "black" }}>
                <i> <BsPower /></i>
            </IconContext.Provider>



        </div>
    )
}
