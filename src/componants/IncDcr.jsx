import React, { useState } from 'react';
import "../index.css";
import { Button } from '@material-ui/core';
import { Add} from '@material-ui/icons';
import { Remove} from '@material-ui/icons';





// CSS is present in index.css file
function IncDcr() {
    const [num, setNum] = useState(0);
    const Inc=()=>{
        setNum(num+1);        
    }
    const Dcr=()=>{
        if(num>0){
            setNum(num-1); 
        }else{
            alert("Number Is Less Than 0");
        }
    }

    return (
        <>
            <div className="main">
                <h2>{num}</h2>
                <div className="div2">
                    <button onClick={Inc} className='btn'><Button><Add/></Button></button>
                    <button onClick={Dcr} className='btn'><Button><Remove/></Button></button>
                    
                    

                </div>
            </div>
        </>
    );
}
export default IncDcr;