import React from 'react'
import info from "../Assets/iconwithinfo.png"
import "./Iconinfo.css"

export const IconInfo = () => {
  return (
    <div className='container-fluid' id='icon'>
        <div className='iconlist' >
            <div className='iconandinfo'>
                <img src= {info}></img>
                Increase your revenue
            </div>
            <div className='iconandinfo'>
                <img src= {info}></img>
                Increase your revenue
            </div>
            <div className='iconandinfo'>
                <img src= {info}></img>
                Increase your revenue
            </div>
            <div className='iconandinfo'>
                <img src= {info}></img>
                Increase your revenue
            </div>
        </div>


    </div>
  )
}
