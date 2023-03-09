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
            <h2 className="head1">To Do List</h2>
            <h1 className="heading">
                <ul >
                    {data.map((cv) => {
                        return (
                            <>
                                <ToDoList text={cv} />
                            </>
                        )
                    })}
                </ul>
            </h1>

            <input type="text" className="inp"
                placeholder="Input Here to Add Data in List..."
                onChange={dataChange}
            />
            <br />

            <button className="btn" onClick={Submit}>Submit</button>

        </div>
        </>
    );
}
export default InputValue;