import {useContext} from 'react';
import {BoardContext} from '../Contexts/Board';
import {ListContext} from '../Contexts/List';
import { TaskContext } from './../Contexts/Task';

const BoardItem = ({board}) => {

const {dispatchBoardActions}= useContext(BoardContext);
const {dispatchListActions} = useContext(ListContext);
const {dispatchTaskActions} = useContext(TaskContext);
const removehandeler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatchBoardActions({type: 'REMOVE_BOARD', payload: board.id});
    dispatchListActions({type: 'REMOVE_LISTS', payload: board.id}); 
    dispatchTaskActions({type: 'REMOVE_TASKS', payload: board.id});
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