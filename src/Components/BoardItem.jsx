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
        <div className='board-box d-flex flex-direction-column'>
            <div className='d-flex justify-content-between'>
                <h4>{board.title}</h4>
                <p onClick={removehandeler}>x</p>
            </div>
        </div>
    );
};

export default BoardItem;