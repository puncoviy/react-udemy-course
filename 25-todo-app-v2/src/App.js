import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import { TodoForm } from './components/TodoList/TodoForm'
import { TodoList } from './components/TodoList/TodoList'
import { TodoListActions } from './components/TodoList/TodoListActions'

function App() {
    const [todoText, setTodoText] = useState('')
    const [todoList, setTodoList] = useState([])

    const addTodoHandler = (event) => {
        event.preventDefault()
        const newTodo = {
            text: todoText,
            isCompleted: false,
            id: uuidv4(),
        }
        todoText.trim() !== ''
            ? setTodoList([...todoList, newTodo])
            : alert('Enter valid ToDo')
        setTodoText('')
    }

    const deleteTodoHandler = (id) => {
        setTodoList(todoList.filter((todo) => todo.id !== id))
    }

    const toggleTodoHandler = (id) => {
        setTodoList(
            todoList.map((todo) =>
                todo.id === id
                    ? { ...todo, isCompleted: !todo.isCompleted }
                    : { ...todo }
            )
        )
    }

    const resetTodoListHandler = () => {
        setTodoList([])
    }

    const deleteCompletedTodosHandler = () => {
        setTodoList(todoList.filter((todo) => !todo.isCompleted))
    }

    const completedTodoCount = todoList.filter(
        (todo) => todo.isCompleted
    ).length

    return (
        <div className="App">
            <h1>Todo App</h1>
            <TodoForm
                value={todoText}
                onChange={(event) => setTodoText(event.target.value)}
                addTodo={(event) => addTodoHandler(event)}
            />
            {todoList.length > 0 && (
                <TodoListActions
                    completedTodoExist={!!completedTodoCount}
                    resetTodoList={resetTodoListHandler}
                    deleteCompleted={deleteCompletedTodosHandler}
                />
            )}
            <TodoList
                toggleTodo={toggleTodoHandler}
                deleteTodo={deleteTodoHandler}
                todoList={todoList}
            />
            {!!completedTodoCount && (
                <h2 className="completed__list_title">
                    You have {completedTodoCount}{' '}
                    {completedTodoCount === 1 ? 'thing' : 'things'} done{' '}
                    {'\u{1F44F}'}
                </h2>
            )}
        </div>
    )
}

export default App
