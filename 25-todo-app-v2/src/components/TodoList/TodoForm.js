import Button from '../UI/Button'
import styles from './TodoForm.module.css'

export function TodoForm({ value, onChange, addTodo }) {
    return (
        <form className={styles.form}>
            <input
                className={styles.input}
                type="text"
                placeholder="Enter new todo"
                value={value}
                onChange={onChange}
            />
            <Button onClick={addTodo} type="submit">
                Submit
            </Button>
            {/* <button className={styles.btn} onClick={addTodo} type="submit">
                Submit
            </button> */}
        </form>
    )
}
