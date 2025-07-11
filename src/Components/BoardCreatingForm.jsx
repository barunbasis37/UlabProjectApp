import {useState, useContext} from 'react';
import { BoardContext } from '../Contexts/Board';

const BoardCreatingForm = () => {
    const[boardTitle, setBoardTitle] = useState('');
    const {dispatchBoardActions} = useContext(BoardContext);
    const submitHandler = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        if (boardTitle.trim() === '') { // Check if the board title is empty
            alert('Board title cannot be empty');                       
            return;
        }
        dispatchBoardActions({
            type: 'CREATE_BOARD',
            payload: {
                title: boardTitle,                    
            }
        });
        setBoardTitle(''); // Clear the input field after submission
    };

    return (
        <div className='allign-center d-flex flex-column'>
        <form onSubmit={submitHandler} className="w-50">
            {/* Add your form fields here */}
            <h2>Create a New Board</h2>
            <input type="text" placeholder="Board Name" className="form-control mb-2"
            value={boardTitle} onChange={(e)=>setBoardTitle(e.target.value)} />
            <button type="submit" className="btn btn-primary w-100">Create Board</button>
        </form>
        </div>
        
    );
};

export default BoardCreatingForm;