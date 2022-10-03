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
            <button className={styles.btn} onClick={addTodo} type="submit">
                Submit
            </button>
        </form>
    )
}
