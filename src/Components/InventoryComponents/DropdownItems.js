import React from 'react'
import { GiChicken } from "react-icons/gi"
import { BsChevronCompactDown } from "react-icons/bs"
import "./DropdownItems.css"
import RadioButtons from './Organisms/RadioButtons'

export default function DropdownItems() {
    return (
        <div className='container'>
            <div className='dropdown-header'>
                <div className='description'>
                    <h3>Out of stock Items</h3>
                    <p>20 Items</p>
                </div>

                <div className='dropdown-icon'>
                    <BsChevronCompactDown className='icon-arrowdown' />

                </div>

            </div>
            <div className='dropdown-hidden'>

                <div className='Fooddetails'>
                    <div className='veg'>
                        <i><GiChicken /></i>
                    </div>
                    <div className=' details-of-food'>
                        <h6>Squid Biryani</h6>
                        <p className='price'>220Rs</p>
                        <p className='category'>Indian</p>

                    </div>


                </div>
                <div className='isAvailable'>
                    <RadioButtons />

                </div>



            </div>
        </div>
    )
}
