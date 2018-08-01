//Read existing todos from local storage
const getStoredTodos = function(){
    const getJSON = localStorage.getItem('todos')

    if(getJSON !== null){
        return JSON.parse(getJSON)
    } else return []
}
//Save Todos
const saveTodos = function(todos){
    localStorage.setItem('todos', JSON.stringify(todos))
}

//Render Application Todos
const renderTodo = function(todos, filter){
    const filteredTodo = todos.filter(function(todo){
        const searchTodos = todo.task.toLowerCase().includes(filter.searchTask.toLowerCase())
        const hideCompleteTask = !filter.hideCompleted || !todo.completed
        
        return searchTodos && hideCompleteTask
    })

    const incompleteTodos = filteredTodo.filter(function(todo){
        return !todo.completed
    })
    
    document.querySelector('#todo-div').innerHTML = ''
    
    document.querySelector('#todo-div').appendChild(generateSummaryDOM(incompleteTodos))

    filteredTodo.forEach(function(todo){
        const createParagraph = generateTodoDOM(todo)
        document.querySelector('#todo-div').appendChild(createParagraph)
    })

    //  filteredTodo.forEach(function(todo){
    //      const todoEl = document.createElement('p')

    //      if (todo.task.length > 0){
    //          todoEl.textContent = todo.task
    //      } else todoEl.textContent = 'No Task'
    
    //      document.querySelector('#todo-div').appendChild(todoEl)
    //  })
}

//Generate the DOM structure for a Todo
const generateTodoDOM = function(todo){
    const createParagraph = document.createElement('p')

    if (todo.task.length > 0){
        createParagraph.textContent = todo.task
    } else createParagraph.textContent = 'No Task'
    
    return createParagraph
}

//Generate the DOM elements for list summary
const generateSummaryDOM = function(incompleteTodos){
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} to-do left`
    return summary
}