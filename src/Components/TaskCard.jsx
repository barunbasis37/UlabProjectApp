import React from 'react';
import {useContext, useState} from 'react';
import {TaskContext} from '../Contexts/Task';
import{ListContext} from '../Contexts/List';
import { BoardContext } from '../Contexts/Board';
import AddItemForm from './AddItemForm';

const TaskCard = (task) => {

    const [editMode, setEditMode] = useState(false);
    const [taskTitle, setTaskTitle] = useState(""); 
    const {dispatchTaskActions} = useContext(TaskContext);
    const {dispatchListActions} = useContext(ListContext);  
    const {dispatchBoardActions} = useContext(BoardContext);    

    const submitHandler = () => {
        dispatchTaskActions({
            type: "UPDATE_TASK_TITLE",
            payload: {
                id: task.id,
                title: taskTitle,
            }
            });
            setEditMode(false);
        };

    const renmoveHandler = () => {
        dispatchTaskActions({
            type: "REMOVE_TASK",
            payload: task.id,
        });
        dispatchListActions({
            type: "REMOVE_TASK_ID_FROM_A_LIST",
            payload: {
                id: task.listId,
                taskId: task.id,
            },
        });
        dispatchBoardActions({
            type: "REMOVE_TASK_ID_FROM_A_BOARD",
            payload: {
                id: task.boardId,
                taskId: task.id,
            },
        });



    }


    return (
        <div>
            { editMode===false ? 
            (
                <div onClick={()=>setEditMode(true)} className="taskcard">
                    <p>{task.title}</p>
                    <p onClick={renmoveHandler} className='add-item-icon'>X</p>
                </div>
            ):(
                <AddItemForm
                    title={taskTitle}  
                    onChangeHandler={(e) => setTaskTitle(e.target.value)}
                    setEditMode={setEditMode}
                    submitHandeler={submitHandler}
                    listForm={false}
                />

            )}

        </div>
    );
};

export default TaskCard;