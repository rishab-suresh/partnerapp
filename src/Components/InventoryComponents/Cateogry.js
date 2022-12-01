import React from 'react'
import { FiSearch } from 'react-icons/fi'
import './Category.css'
import NonVegFoods from "../InventoryComponents/InventoryData/NonVeg.json"
import { GiChicken } from 'react-icons/gi'
import { IconContext } from 'react-icons'
import NonVegFoodsCategory from './FoodCategoryComponents/NonVegFoodsCategory'
import VegFoodCategory from './FoodCategoryComponents/VegFoodCategory'

export const Cateogry = () => {
    return (
        <div >
            <div className='container searchbar-wrapper'>
                <label form='search' className='searchbox' ></label>
                <input type="search" id="search" placeholder='Search For Addons'></input>
                <i className='icon-search'><FiSearch /></i>
            </div>

            <div className='container Nonvegfoodlist'>
                <h1>Indian Chicken</h1>
                <NonVegFoodsCategory/>
            </div>

            <div className='container vegfoodlist'>
                <h1>Indian Veg Food</h1>
                <VegFoodCategory/>
            </div>




        </div>




    )
}
