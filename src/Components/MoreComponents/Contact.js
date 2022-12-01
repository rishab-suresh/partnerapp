import React from 'react'
import { IconContext } from 'react-icons'
import { BsArrowBarRight } from 'react-icons/bs'
import "./contact.css"

export default function Contact() {
    return (
        <div className='contianer-fluid' id='contact'>
            <div className='textcontect'>
                <h4>Point Of Contact</h4>
                <p>For Sales Enquiries</p>

            </div>


            <div className='arrow-right'>
                <IconContext.Provider value={{ size: "25px", color: "black" }}>
                    <i><BsArrowBarRight /></i>
                </IconContext.Provider>
            </div>


        </div>
    )
}
