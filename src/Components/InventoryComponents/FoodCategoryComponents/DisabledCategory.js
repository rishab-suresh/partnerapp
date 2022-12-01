import React from 'react'
import RadioButtons from '../Organisms/RadioButtons'
import NonVegFoods from "../InventoryData/NonVeg.json"
import { IconContext } from 'react-icons'
import { GiChicken } from 'react-icons/gi'

export default function DisabledCategory() {
    return (
        <div>

            {
                NonVegFoods.map(NonVegFood => {
                    return (
                        <div className='left-side' key={NonVegFood.id}>
                            <div className='disabledfood'>
                                <div className='veg'>
                                    <IconContext.Provider value={{ color: "red", size: "50px" }}>

                                        <i><GiChicken /></i>

                                    </IconContext.Provider>

                                </div>
                                <div className='FoodData'>
                                    {NonVegFood.Title}
                                    {NonVegFood.Price}
                                </div>

                            </div>


                            <div className='radiobutton'>

                                <RadioButtons />

                            </div>
                        </div>
                    )
                })
            }


        </div>
    )
}
