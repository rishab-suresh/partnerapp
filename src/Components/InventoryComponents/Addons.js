import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { GiChicken } from 'react-icons/gi'
import RadioButtons from './Organisms/RadioButtons'
import { IconContext } from 'react-icons'
import "./Addons.css"

export const Addons = () => {
    return (
        <div>
            <div className='container searchbar-wrapper'>
                <label form='search' className='searchbox' ></label>
                <input type="search" id="search" placeholder='Search For Addons'></input>
                <i className='icon-search'><FiSearch /></i>
            </div>

            <div className='container'>
                <div className='AddonTitle'>
                    <h6>Add-ons</h6>
                    <p>1 add-ons</p>
                </div>

                <div className='addons-section'>
                    <div className='addons-list'>
                        <div className='veg'>
                            <IconContext.Provider value={{color:"red",size:"50px"}}>

                                <i><GiChicken /></i>

                            </IconContext.Provider>

                        </div>
                        <div className=' details-of-food'>
                            <h6>Mayo</h6>
                            <p className='price'>20Rs</p>
                            <p className='Quantity'>0 Items</p>

                        </div>


                    </div>
                    <div className='isAvailable'>
                        <RadioButtons />

                    </div>



                </div>


            </div>

        </div>



    )
}
