import React from 'react'
import "./Items.css"

import { FiSearch} from "react-icons/fi";
import DropdownItems from './DropdownItems';
import DropdownDisabledItems from './DropdownDisabledItems';

export const Items = () => {
  return (
    <div className='container-fluid'>
        <div className='container' id='searchbox-container'>
        <div className='searchbar-wrapper'>
            <label form='search' className='searchbox' ></label>
            <input type="search" id="search" placeholder='Search'/> 
            <i className='icon-search'><FiSearch/></i>
        </div>
        </div>
       

        <div className='dropdown-items-out-of-stock'>
            <DropdownItems/>

        </div>
        <div className='dropdown-items-disabled'>
            <DropdownDisabledItems/>
        </div>

    </div>
  )
}
