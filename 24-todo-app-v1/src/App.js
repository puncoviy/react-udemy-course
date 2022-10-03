import { useState } from 'react'
import './App.css'
import { TodoForm } from './components/TodoList/TodoForm'
import { TodoList } from './components/TodoList/TodoList'

function App() {
    const [todoText, setTodoText] = useState('')
    const [todoList, setTodoList] = useState([])

    const addTodoHandler = (event) => {
        event.preventDefault()
        todoText.trim() !== ''
            ? setTodoList([...todoList, todoText])
            : alert('Enter valid ToDo')
        setTodoText('')
    }

    const deleteTodoHandler = (index) => {
        setTodoList(todoList.filter((_, idx) => idx !== index))
    }

    return (
        <div className="App">
            <h1>Todo App</h1>
            <TodoForm
                value={todoText}
                onChange={(event) => setTodoText(event.target.value)}
                addTodo={(event) => addTodoHandler(event)}
            />
            {!todoList.length && (
                <h3 className="empty_list_title">
                    All things done! Or not even started...{'\u{1F914}'}
                </h3>
            )}
            <TodoList deleteTodo={deleteTodoHandler} todoList={todoList} />
        </div>
    )
}

export default App
