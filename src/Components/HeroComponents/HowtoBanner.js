import React from 'react'
import { BsHouseDoor } from "react-icons/bs";
import './HowtoBanner.css'
export const HowtoBanner = () => {
    return (
        <div className='container-fluid' id='banner'>
            <div className='Heading'>
                <h1 className='title'>Getting Started Is Easy</h1>
            </div>
            <div className='row'>


                <div className='components'>

                    <div className='col'>
                        <div className='step1'>
                            <i><BsHouseDoor /></i>
                            <h2>Sign Up</h2>
                            <p>Start with providing your restaurant business details</p>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='step1'>
                            <i><BsHouseDoor /></i>
                            <h2>Sign Up</h2>
                            <p>Start with providing your restaurant business details</p>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='step1'>
                            <i><BsHouseDoor /></i>
                            <h2>Sign Up</h2>
                            <p>Start with providing your restaurant business details</p>
                        </div>
                    </div>
                </div>

            </div>



        </div>
    )
}
