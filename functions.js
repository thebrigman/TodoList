const getTodos = () => {
    const ls = localStorage.getItem('todos')
    return JSON.parse(ls)

}


const printTodos = (todos) => {
    document.querySelector(".container").innerHTML = ""
    
        todos.forEach((todo) => {

            const todoDiv = document.createElement("div")
            todoDiv.setAttribute('class', 'todoDiv')
            document.querySelector('.container').appendChild(todoDiv)

            const checkBox = document.createElement("input")
            checkBox.setAttribute('type', 'checkbox')
            checkBox.setAttribute('class', 'todo-check')
            todoDiv.appendChild(checkBox)
            
            const todoSpan = document.createElement("span")
            todoSpan.textContent = todo.title
            checkBox.checked = todo.body
            if (checkBox.checked) {
                todoDiv.setAttribute('class', 'todoDiv clicked')
            }
            todoDiv.appendChild(todoSpan)

            const button = document.createElement('button')
            button.textContent = 'remove'
            button.setAttribute('class', 'remove')
            todoDiv.appendChild(button)
            console.log('chekcd check ', checkBox.checked)
            
            button.addEventListener('click', (e) => {
                removeTodos(todo.id)
                saveTodos(todos)
                printTodos(todos)
            })

            checkBox.addEventListener('click', (e) => {
                const checkedTodo = todos.findIndex((item) => {
                    return todo.id === item.id
                })
                console.log('todoFilter ', checkedTodo)
                console.log('checked ',todos[checkedTodo].body = !todos[checkedTodo].body)

                saveTodos(todos)
                printTodos(todos)
                

            })

        })
}

const saveTodos = (todos) => {
    const todoString = JSON.stringify(todos)
    localStorage.setItem('todos', todoString)
}

const removeTodos = (id) => {
    const todoIndex = todos.findIndex((todo) => {
        return todo.id === id
    })
    console.log('todoIndex ', todoIndex)
    
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

const uuid = () => {
    crypto.randomUUID()
}

