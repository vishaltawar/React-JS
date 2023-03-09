import React, { useState } from 'react';
import './InterviewComponent.css';


const Quetions = ({ Quetion, Ans }) => {
    const [cond, setCond] = useState(false);
    return (
        <>
            <div className="que_main_div">
                <div className="sub_div">
                    <span onClick={() => { setCond(!cond) }} className='show'>{cond ? "–" :"+" }</span>
                    <h4 className='quetion'>{Quetion}</h4>

                </div>

                {cond && <p className='answer'>{Ans}</p>}
            </div>
        </>
    )
}

export default Quetions;

