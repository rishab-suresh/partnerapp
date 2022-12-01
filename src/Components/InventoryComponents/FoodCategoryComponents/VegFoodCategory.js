import React from 'react'
import Vegs from "../InventoryData/Veg.json"
import { IconContext } from 'react-icons'
import { GiChicken } from 'react-icons/gi'
import "./Foodlists.css"

export default function VegFoodCategory() {
  return (
    <div>
         {
        Vegs.map(Veg => {
                        return (
                            <div className='NonVegFooddata' key={Veg.id}>
                                <div className='veg'>
                                    <IconContext.Provider value={{ color: "red", size: "50px" }}>

                                        <i><GiChicken /></i>

                                    </IconContext.Provider>

                                </div>
                                <div className='FoodData'>
                                    <div className='FoodName'>

                                    {Veg.Name}
                                    </div>
                                    <div className='FoodPrice'>
                                    {Veg.Price}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }



    </div>
  )
}
