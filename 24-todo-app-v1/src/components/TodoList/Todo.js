import { RiTodoLine } from 'react-icons/ri'
import styles from './Todo.module.css'

export function Todo({ value, deleteTodo, index }) {
    return (
        <li
            className={styles.todo__item}
            onDoubleClick={() => deleteTodo(index)}
        >
            <RiTodoLine className={styles.todo_icon} />
            {value}
        </li>
    )
}
