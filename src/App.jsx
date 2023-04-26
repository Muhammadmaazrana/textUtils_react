import React, { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';

import TextForm from './component/TextForm';


function navbar() {
  
  return (
   
    <div>
       
      <Navbar title="TextUtils" ></Navbar>
      <div className='container'>
      <TextForm Heading="Enter the text to analyze" />
      </div>
      
    </div>
  )
}


export default navbar;