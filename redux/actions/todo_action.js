const ADD_TODO = 'ADD_TODO';

function addTodo(todo){
    return {
        type:ADD_TODO,
        payload:todo
    }
}
