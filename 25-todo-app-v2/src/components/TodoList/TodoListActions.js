import { RiRefreshLine, RiDeleteBin5Line } from 'react-icons/ri'
import Button from '../UI/Button'
import styles from './TodoListActions.module.css'

export function TodoListActions({
    resetTodoList,
    deleteCompleted,
    completedTodoExist,
}) {
    return (
        <div className={styles.btn__box}>
            <Button title="Reset All Todo List" onClick={resetTodoList}>
                <RiRefreshLine className={styles.btn__icon} />
            </Button>
            <Button
                title="Clear Completed Todos"
                onClick={deleteCompleted}
                disabled={!completedTodoExist}
            >
                <RiDeleteBin5Line className={styles.btn__icon} />
            </Button>
        </div>
    )
}
