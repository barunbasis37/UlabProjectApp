const AddItem = ({listAddItem, setEditMode}) => {
    return (
        <div className={
            listAddItem? 
            'add-item list-add-item' 
            : 'add-item task-add-item'  
            }
            onClick={()=> setEditMode(true)}>
            
            <p className='btn btn-primary'>
                {listAddItem ? '+ Add a List' : '+ Add a Task'  }
            </p>
        </div>
    );
};

export default AddItem;