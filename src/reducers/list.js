export const listReducer=(lists=[], action)=>{

    switch (action.type){
        case "CREATE_LIST":{

            const newList={
                id: action.payload.id,
                title: action.payload.title,
                boardId: action.payload.boardId,
                task: [],  
            };
            return[...lists, newList];

        }
        case "UPDATE_LIST_NAME":{

            const updatedLists= lists.map((item)=>{
                if(item.id=action.payload.id){
                    return{
                        ...item,
                        title: action.payload.title
                    };
                }
                return item;

            });
            return updatedLists;
        }
        case "CHANGE_BOARD_ID":{}
        case "REMOVE_LIST":{}
        case "ADD_TASK_TO_A_LIST":{}
        case "REMOVE_TASK_FROM_A_LIST":{}
        default:{
            return lists;
        }


    }

}