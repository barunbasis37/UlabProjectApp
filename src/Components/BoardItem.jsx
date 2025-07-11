const BoardItem = (board) => {
    return (
        <div className='board-box d-flex flex-direction-column'>
            <div className='d-flex justify-content-between'>
                <h4>{board.title}</h4>
                <p>x</p>
                </div>
        </div>
    );
};

export default BoardItem;