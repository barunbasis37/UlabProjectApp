export const taskReducer=(tasks=[], action)=>{
    switch(action.type){
        case "CREATE_TASK":{
            const newTask={
                id: action.payload.id,
                title: action.payload.title,
                listId: action.payload.listId,
                boardId: action.payload.boardId,
            };
            return [...tasks, newTask];
        }
        case "UPDATE_TASK_TITLE":{
            const updateTasks=tasks.map((item)=>{
                if(item.id===action.payload.id){
                    return{
                        ...item, 
                        title: action.payload.title,
                    };                    
                }
                return item;
            });
            return updateTasks;

        }
        case "REMOVE_TASK":{
            return tasks.filter(tskId=>tskId!==action.payload.id);

        }
        case "CHANGE_LIST_ID_OF_A_TASK":{
            const updateTasks= tasks.map((item)=>{
                if(item.id===action.payload.id){
                    return{
                        ...item,
                        listId: action.payload.listId,
                    };
                }
                return item;
            });
            return updateTasks;

        }
        case "CHANGE_BOARD_ID_OF_A_TASK":{
            const updateTasks= tasks.map((item)=>{
                if(item.id===action.payload.id){
                    return{
                        ...item,
                        boardId: action.payload.boardId,
                    };
                }
                return item;
            });
            return updateTasks;
        }
        default:{
            return tasks;
        }
    }
}