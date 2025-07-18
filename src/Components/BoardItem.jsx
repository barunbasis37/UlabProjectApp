import {useContext} from 'react';
import {BoardContext} from '../Contexts/Board';
import {ListContext} from '../Contexts/List';
import { TaskContext } from '../Contexts/Task';

const BoardItem = ({board}) => {

const {dispatchBoardActions}= useContext(BoardContext);
const {dispatchListActions} = useContext(ListContext);
const {dispatchTaskActions} = useContext(TaskContext);
const removehandeler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatchBoardActions({type: 'REMOVE_BOARD', payload: board.id});
    board.lists.forEach((listId) => {
        dispatchListActions({type: 'REMOVE_LIST', payload: listId});
    });
    board.tasks.forEach((taskId) => {
        dispatchTaskActions({type: 'REMOVE_TASK', payload: taskId});
    });
    
};


    return (
        <div className='board-item d-flex flex-column justify-content-between align-items-center m-2 p-3'>
            <div className='col-12 d-flex justify-content-between align-items-center'>
                <h4>{board.title}</h4>
                <p onClick={removehandeler}>x</p>
            </div>
        </div>
    );
};

export default BoardItem;