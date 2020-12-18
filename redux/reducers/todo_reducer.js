
const initialState = {todos:[]};
function todo_reducer(state=initialState,action){
    console.info(action);
    console.info('Estado atual');
    console.info(state);
    switch (action.type){
        case('ADD_TODO'):
            return {...state,todos:[...state.todos,action.payload]}
        default:
            return state;
    }


}
