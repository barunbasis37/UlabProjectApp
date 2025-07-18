import {useState, useContext} from "react";
import {Link, useParams} from "react-router-dom";
import AddItem from '../Components/AddItem';
import AddItemForm from '../Components/AddItemForm';
import {BoardContext} from '../Contexts/Board';
import {ListContext} from '../Contexts/List';
import TaskList from '../Components/TaskList';

const BoardDetails=()=>{
    const [editMode, setEditMode] = useState(false);
    const [listTitle, setListTitle] = useState('');
    const {boardId} = useParams();
    const {dispatchBoardActions} = useContext(BoardContext);
    const {lists, dispatchListActions} = useContext(ListContext);
    const renderedList=lists.filter((item)=>item.boardId===boardId);

    const submitHandler = (e) => {
        e.preventDefault();
        const id=Date.now() +"";
        console.log(renderedList);
        dispatchListActions({
            type: "CREATE_LIST",
            payload: {
                id:id,
                title: listTitle,
                boardId: boardId,
            },
        });
        dispatchBoardActions({
            type: "ADD_LIST_ID_TO_A_BOARD",
            payload: {
                id: boardId,
                listId: id,
            },
        });
        setListTitle("");
        setEditMode(false);

    };

    return(
        <div className="form-control">
            <Link to="/" className="btn btn-primary">Back to Boards</Link>
            {renderedList.map((list)=>(
                
                <TaskList key={list.id} list={list} />
            ))}
            {editMode===false ? (
                <AddItem 
                listAddItem={true} 
                setEditMode={setEditMode} 
                />

            ):(
                <AddItemForm 
                    listForm={true}                     
                    title={listTitle} 
                    onChangeHandler={(e)=>setListTitle(e.target.value)} 
                    setEditMode={setEditMode} 
                    submitHandler={submitHandler}
                />  
            )}      
        
        
        </div>
    );  
};
export default BoardDetails