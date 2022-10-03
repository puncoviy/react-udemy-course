import { Todo } from './Todo'
import styles from './TodoList.module.css'

export function TodoList({ todoList, deleteTodo }) {
    return (
        <ul className={styles.todo__list}>
            {todoList.map((todo, index) => (
                <Todo
                    deleteTodo={deleteTodo}
                    value={todo}
                    key={todo + index}
                    index={index}
                />
            ))}
        </ul>
    )
}
