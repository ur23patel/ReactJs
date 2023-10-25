import React, { useState } from 'react';

const FunctionalComponentState = () => {
    let [Data,setData] = useState("Default");
    let [kaipan,gemete] = useState("data");
    let variable = "Data"
    const changeData = () => {
        console.log("called");
        variable = "Test"
        setData("Updated Value")
        gemete("Updated new data")
    }
    return (
        <>
        <p>Simple variable : {variable}</p>
        <p>State Data : {Data}</p>
        <p>Other State : {kaipan}</p>
          {/* <button className='btn btn-primary' onClick={()=>{ console.log("called inside  btn"); setData("Updated Value inside btn")}}>Click</button> &nbsp;    */}
          
          <button className='btn btn-primary' onClick={changeData}>Click</button>
        </>
    );
};

export default FunctionalComponentState;
