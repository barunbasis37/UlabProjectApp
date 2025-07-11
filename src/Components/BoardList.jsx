import {useContext} from 'react';
import {BoardContext} from '../Contexts/Board';
import {Link} from 'react-router-dom';
import BoardItem from '../Components/BoardItem';
const BoardList = () => {
    const {boards}=useContext(BoardContext);
    console.log(boards);
    return (
        <div className='flex-wrap d-flex justify-content-round'>
            {boards.map((board)=>{
                <Link key={board.id} to={`/board/{boardId}`}>
                    <BoardItem board={board}/>
                </Link>
            })}
        </div>
    );
};

export default BoardList;