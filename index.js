

const store = Redux.createStore(todo_reducer);
console.info("Estado da store inicial");
console.log(store.getState());

const subs = store.subscribe(()=>{
    renderTodoList(store.getState().todos);
})

const renderTodoList = (todos) =>{
    const pendentes = document.getElementById('pendentes');
    pendentes.innerHTML = todos.map(item=>`<li>${item}</li>`).join(' ');
}
