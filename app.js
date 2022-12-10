let todos = getTodos()
if (!todos) {
    todos = []
}

printTodos(todos)


document.querySelector('.add-form').addEventListener('submit', function (e) {
    e.preventDefault()
    const addInput = document.querySelector('.add-input')
    

    const findDup = todos.findIndex((todo) => {
        return todo.title === addInput.value
            
    })
    
    if ((findDup < 0) && (addInput.value != " ")) {
        todos.push({
            id: crypto.randomUUID(),
            title: addInput.value,
            body: false
        })

    }

    saveTodos(todos)
    todos = getTodos()
    printTodos(todos)
    
    addInput.value = " "

    
})

document.querySelector('.search-todos').addEventListener('input', (e) => {
    console.log(e.target.value)
    const todosSearch = todos.filter((todo) => {
        return todo.title.includes(e.target.value) 
    })
    printTodos(todosSearch)
})