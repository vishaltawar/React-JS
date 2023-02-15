import React, { useState } from "react";

let time = new Date().toLocaleTimeString();

function Time() {
    const [ctime,setCtime]=useState(time);
    let updateTime=()=>{
        time = new Date().toLocaleTimeString();
        
        setCtime(time);
    }
    setInterval(updateTime,1000);
    return (
        <>
            <div id="main">
                <h2>{ctime}</h2>
                <h3 id="text">Current Time</h3>
            </div>
        </>
    );
}
export default Time;