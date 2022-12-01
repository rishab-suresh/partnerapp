import React from 'react'
import RadioButtons from '../InventoryComponents/Organisms/RadioButtons'
import "./RecievingOrders.css"


export default function RecievingOrders() {
  return (
    <div className='container-fluid' id='Orders'>
        <div className='RecieveInfo'>
            <h4>Receiving Orders</h4>
            <p>Opens Next at 12:30pm Today</p>

        </div>

        <div className='RadioButtonCustom'>
            <RadioButtons/>
            
        </div>
    </div>
  )
}
