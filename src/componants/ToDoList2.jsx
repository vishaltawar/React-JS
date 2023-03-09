import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import ToDoListItems2 from './ToDoListItems2';

import "../index.css";

// Css Writern in index.css file

const ToDoList2 = () => {
    const [item, setItem] = useState([]);
    const [addItem, setAddItem] = useState("");


    const InputValue = (event) => {
        setAddItem(event.target.value);
    }
    const AddItem = () => {
        if (addItem.length > 0) {
            setItem((oldItem) => {
                return [...oldItem, addItem];
            });
        }
        setAddItem("");

    }

    return (
        <>
            <div className="main_div">
                <div className="head_div">
                    <h1>To Do List</h1>
                </div>
                <div className="input_div">
                    <input type="text" placeholder='Input Data Here..' value={addItem} onChange={InputValue} />
                    <Button variant="outlined" color="success" onClick={AddItem}> Add Data</Button>

                </div>
                <div className="list_div">
                    <ul>
                        {
                            item.map((data, i) => {
                                return (<>
                                    <ToDoListItems2
                                        key={i}
                                        text={data} />
                                </>);
                            })
                        }

                    </ul>
                </div>
            </div>
        </>
    );
}
export default ToDoList2;

