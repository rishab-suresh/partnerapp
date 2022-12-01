import React from 'react'
import Form from 'react-bootstrap/Form';
import "./RadioButtons.css"

export default function RadioButtons() {
  return (
    <Form className='ButtonForm'>
    <Form.Check 
      type="switch"
      id="custom-switch"
    
    />
   
  </Form>
  )
}
