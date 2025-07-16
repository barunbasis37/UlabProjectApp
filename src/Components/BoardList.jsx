import {useContext} from 'react';
import {BoardContext} from '../Contexts/Board';
import {Link} from 'react-router-dom';
import BoardItem from './BoardItem';
const BoardList = () => {
    const {boards}=useContext(BoardContext);
    console.log(boards);
    return (
        <div className='justify-content-center d-flex flex-wrap board-list'>
            {boards.map((board) => (
                <Link key={board.id} to={`/boards/${board.id}`}>
                    <BoardItem board={board}/>
                </Link>
            ))}
        </div>
    );
};

export default BoardList;