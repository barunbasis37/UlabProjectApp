import {useState, useContext} from 'react';
import { BoardContext } from '../Contexts/Board';
import { ListContext } from '../Contexts/List';
import { TaskContext } from '../Contexts/Task';

import AddItem from './AddItem';
import AddItemForm from './AddItemForm';
import TaskCard from './TaskCard';

const TaskList = ({list}) => {
    console.log(list);
    const [taskTitle, setTaskTitle] = useState("");
    const [editMode, setEditMode] = useState(false);

    const {tasks, dispatchTaskActions} = useContext(TaskContext);
    const {dispatchListActions} = useContext(ListContext);
    const {dispatchBoardActions} = useContext(BoardContext);

    const submitHandler = () => {
        const taskId=Date.now() + '';
        console.log("list", list);
        dispatchTaskActions({
            type: "CREATE_TASK",
            payload: {
                id: taskId,
                title: taskTitle,
                listId: list.id,
                boardId: list.boardId,
            },
        });

        dispatchListActions({
            type: "ADD_TASK_ID_TO_A_LIST",
            payload: {
                id: list.id,
                taskId: taskId,
            },
        });

        dispatchBoardActions({
            type: "ADD_TASK_ID_TO_A_BOARD",  
            payload: {
                id: list.boardId,
                taskId: taskId,
            },
        });
        setEditMode(false);
        setTaskTitle("");
      
};
const removeHandler = () => {
    dispatchListActions({
        type: "REMOVE_LIST",
        payload: list.id,
    })

    list.tasks.forEach((taskId) => {
        dispatchTaskActions({type: "REMOVE_TASK", payload: taskId,});
        dispatchBoardActions({
            type: "REMOVE_TASK_ID_FROM_A_BOARD",
            payload: {
                id: list.id,
                taskId: taskId,
            },
        });
    });

    dispatchBoardActions({
        type: "REMOVE_LIST_ID_OF_A_BOARD",
        payload: {
            id: list.boardId,
            listId: list.id,
        },
    });
};
console.log("list", list.tasks);
    return (
        <div className='form-control form-container'>        
        <div className='list-title-container'>
            <h5 className='text-center'>{list.title}</h5>
            <p onClick={removeHandler} className='add-item-icon'>
                X
            </p>
           {Array.isArray(list?.tasks) &&
            list.tasks.map((item) => {
                const task = tasks.find((ele) => ele.id === item);
                return task ? <TaskCard key={task.id} task={task}/> : null;
            })}       

            {editMode === false ? (
                <AddItem listAddItem={false} setEditMode={setEditMode} />
            ) : (
                <AddItemForm 
                    title={taskTitle} 
                    onChangeHandler={(e) => {setTaskTitle(e.target.value);
                    }} 
                    setEditMode={setEditMode} 
                    submitHandler={submitHandler}
                />
            )}
        </div>
       

        </div>
    );
};

export default TaskList;