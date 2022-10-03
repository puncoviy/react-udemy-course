import { Todo } from './Todo'
import styles from './TodoList.module.css'

export function TodoList({ todoList, deleteTodo, toggleTodo }) {
    return (
        <ul className={styles.todo__list}>
            {!todoList.length && (
                <h3 className="empty_list_title">
                    All things done! Or not even started...{'\u{1F914}'}
                </h3>
            )}
            {todoList.map((todo) => (
                <Todo
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                    todo={todo}
                    key={todo.id}
                />
            ))}
        </ul>
    )
}
