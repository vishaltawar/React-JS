import React, { useState } from 'react'
import Quetions from './Quetions';
import { API } from './API';

const Interview = () => {
  const [data, setData] = useState(API); 
  return (
    <>
    <h2 className='text-center text-capitalize text-danger'>Interview quetion of react</h2>
      {
        data.map((value) => {
          const { id } = value;
          return <Quetions key={id} {...value} />;
        })
      }
    </>
  )
}

export default Interview;
