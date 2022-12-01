import React from 'react'
import "./DropdownDisableditems.css"
import { BsChevronCompactDown } from "react-icons/bs"
import VegFoodCategory from './FoodCategoryComponents/VegFoodCategory'
import DisabledCategory from './FoodCategoryComponents/DisabledCategory'

export default function DropdownDisabledItems() {
  return (
    <div className='container'>
         <div className='dropdown-header'>
                <div className='description'>
                    <h3>Disabled Items</h3>
                    <p>0 Items</p>
                </div>

                

                <div className='dropdown-icon'>
                    <BsChevronCompactDown className='icon-arrowdown' />

                </div>

               
            </div>
            <div className='dropdownlist'>
                    <DisabledCategory/>
                </div>

    </div>
  )
}
