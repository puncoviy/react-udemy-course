import {
    RiTodoLine,
    RiDeleteBack2Line,
    RiCheckboxCircleLine,
} from 'react-icons/ri'
import styles from './Todo.module.css'

export function Todo({ todo, deleteTodo, toggleTodo }) {
    return (
        <li
            className={`${styles.todo__item} ${
                todo.isCompleted ? styles.completed : ''
            }`}
            id={todo.id}
        >
            <RiTodoLine className={styles.todo_icon} />
            <p className={styles.todo_text}>{todo.text}</p>
            <RiDeleteBack2Line
                className={styles.delete_icon}
                onClick={() => deleteTodo(todo.id)}
            />
            <RiCheckboxCircleLine
                className={styles.complete_icon}
                onClick={() => toggleTodo(todo.id)}
            />
        </li>
    )
}
