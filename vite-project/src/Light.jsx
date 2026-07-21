import React from 'react'
import { useState } from 'react';
import off from "./assets/off.png";
import on from "./assets/on.png";
function Light() {
    const [isOn,setIsOn]=useState(false);
  return (
    <>
    <img src={ison?on:off} alt="" id='a' style={{width:"700px",height:"450px"}}/>
    <button onClick={setIsOn(true)}>Turn on </button>
    <button onClick={setIsOn(false)}>Turn off </button>
    </>
  )
}

export default Light