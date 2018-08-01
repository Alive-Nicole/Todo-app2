const todos = getStoredTodos()

const filter = {
    searchTask: '',
    hideCompleted: false
}

renderTodo(todos, filter)


document.querySelector('#search-todo').addEventListener('input', function(e){
    filter.searchTask = e.target.value
    renderTodo(todos, filter)
})

document.querySelector('#todo-form').addEventListener('submit', function(e){
    e.preventDefault()
    todos.push({
        task: e.target.elements.addTodo.value,
        completed: false
    })
    saveTodos(todos)
    renderTodo(todos, filter)
    e.target.elements.addTodo.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function(e){
    filter.hideCompleted = e.target.checked 
    renderTodo(todos, filter)
})

