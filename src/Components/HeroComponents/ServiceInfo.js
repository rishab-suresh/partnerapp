import React from 'react'
import service from "../Assets/serviceimg.png"
import "./ServiceInfo.css"

export const ServiceInfo = () => {
  return (
    <div className='container' id='service'>
        <h1 className='serviceinfo'>Get services that help you grow </h1>
        <div className='listandpic'>
       
            <div className='listinfo'>
                <div className='service-offer'>
                    <img src={service}></img>
                    <h3>Track Buisnesses</h3>
                    <p>Track sales, customers & growth levers directly from your phone</p>
                </div>
                <div className='service-offer'>
                    <img src={service}></img>
                    <h3>Track Buisnesses</h3>
                    <p>Track sales, customers & growth levers directly from your phone</p>
                </div>
                <div className='service-offer'>
                    <img src={service}></img>
                    <h3>Track Buisnesses</h3>
                    <p>Track sales, customers & growth levers directly from your phone</p>
                </div>
                <div className='service-offer'>
                    <img src={service}></img>
                    <h3>Track Buisnesses</h3>
                    <p>Track sales, customers & growth levers directly from your phone</p>
                </div>
               
            </div>
            <div className='listpic'>
                    <img src='https://partner-with-us.swiggy.com/static/2069e8d2459542ea5ed556ba762113ef.png'></img>

                </div>
        </div>
    </div>
  )
}
