import React, { useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import RestoreFromTrash from '@material-ui/icons/RestoreFromTrash'


function ToDoListItems2(props) {
    const [cutTic, setCutTic] = useState(false);
    const CutTic = () => {
        setCutTic(true);
    }
    const CutOut = () => {
        setCutTic(false);
    }
    return (
        <>
            <div className="mapData">
                <span onClick={CutOut}><RestoreFromTrash className="restoreFromTrash" /></span>
                <span onClick={CutTic}><DeleteIcon className="deletIcon" /></span>
                <li style={{ textDecoration: cutTic ? 'line-through' : 'none' }}> {props.text}</li>
            </div>
        </>
    );
}
export default ToDoListItems2;