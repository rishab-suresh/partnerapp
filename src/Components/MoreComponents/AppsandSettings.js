import React from 'react'
import { BsPrinter } from 'react-icons/bs'
import { BsArrowBarRight } from 'react-icons/bs'
import "./AppsandSettings.css"
import { IconContext } from 'react-icons'

export default function AppsandSettings() {
    return (
        <div className='container-fluid' id='cols'>
            <div className='settings'>
                <div className='icons'>
                    <div className='iconpic'>
                        <IconContext.Provider value={{ color: "black", size: "25px" }}>
                            <i><BsPrinter /></i>
                        </IconContext.Provider>



                    </div>

                    <h6>Bill Printer Settings</h6>
                </div>
                <div className='arrow-right'>
                    <IconContext.Provider value={{ color: "black", size: "25px" }}>
                        <i><BsArrowBarRight /></i>
                    </IconContext.Provider>
                </div>
               
            </div>
            <div className='settings'>
                <div className='icons'>
                    <div className='iconpic'>
                        <IconContext.Provider value={{ color: "black", size: "25px" }}>
                            <i><BsPrinter /></i>
                        </IconContext.Provider>



                    </div>

                    <h6>Bill Printer Settings</h6>
                </div>
                <div className='arrow-right'>
                    <IconContext.Provider value={{ color: "black", size: "25px" }}>
                        <i><BsArrowBarRight /></i>
                    </IconContext.Provider>
                </div>
               
            </div>
            <div className='settings'>
                <div className='icons'>
                    <div className='iconpic'>
                        <IconContext.Provider value={{ color: "black", size: "25px" }}>
                            <i><BsPrinter /></i>
                        </IconContext.Provider>



                    </div>

                    <h6>Bill Printer Settings</h6>
                </div>
                <div className='arrow-right'>
                    <IconContext.Provider value={{ color: "black", size: "25px" }}>
                        <i><BsArrowBarRight /></i>
                    </IconContext.Provider>
                </div>
               
            </div>
            <div className='settings'>
                <div className='icons'>
                    <div className='iconpic'>
                        <IconContext.Provider value={{ color: "black", size: "25px" }}>
                            <i><BsPrinter /></i>
                        </IconContext.Provider>



                    </div>

                    <h6>Bill Printer Settings</h6>
                </div>
                <div className='arrow-right'>
                    <IconContext.Provider value={{ color: "black", size: "25px" }}>
                        <i><BsArrowBarRight /></i>
                    </IconContext.Provider>
                </div>
               
            </div>
            <div className='settings'>
                <div className='icons'>
                    <div className='iconpic'>
                        <IconContext.Provider value={{ color: "black", size: "25px" }}>
                            <i><BsPrinter /></i>
                        </IconContext.Provider>



                    </div>

                    <h6>Bill Printer Settings</h6>
                </div>
                <div className='arrow-right'>
                    <IconContext.Provider value={{ color: "black", size: "25px" }}>
                        <i><BsArrowBarRight /></i>
                    </IconContext.Provider>
                </div>
               
            </div>
        </div>
    )
}
