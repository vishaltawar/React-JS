import React, { useState } from "react";
import './InputValue.css';
import ToDoList from "./ToDoList";


const InputValue = () => {

    const [data, setData] = useState([]);
    const [value, setValue] = useState("");

    const dataChange = (event) => {
        setValue(event.target.value);
    }
    const Submit = () => {
        setData((oldData) => {
            return [...oldData, value]
        });
    }
    return (
        <><div className="main">
            <h1 className="heading">
                Hello, Vishal
            </h1>
            <ul>
                {data.map((cv) => { return <ToDoList text={cv} /> })}
            </ul>
            <input type="text" className="inp"
                placeholder="Input Here to Add Data..."
                onChange={dataChange}
            />
            <br />
            <br />
            <button className="btn" onClick={Submit}>Submit</button>
        </div>
        </>
    );
}
export default InputValue;