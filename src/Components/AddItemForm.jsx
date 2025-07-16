import React from 'react';

const AddItemForm = ({
    listForm,
    submitHandeler,
    title,
    onChangeHandeler,
    setEditMode,
}) => {    
    return (
        <div className='form-container'>
            <div className='form-card'>
                <form>
                    <textarea
                        value={title}
                        onChange={onChangeHandeler}
                        cols="30"
                        row="2"
                        className='form-textarea'
                    ></textarea>
                </form>
            </div>
            <div className='button-container'>
                <button className='btn btn-primary' onClick={submitHandeler}>
                    {listForm ? 'Add List' : 'Add Task'}
                </button>
                <p className='"add-item-icon' onClick={()=>setEditMode(false)}>
                    x
                </p>
            </div>  
        </div>
        
    );
};

export default AddItemForm;