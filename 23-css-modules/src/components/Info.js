import './Info.css'
import classes from './Info.module.css'

export function Info() {
    return (
        <div className={classes.info}>
            <h1>Hello from Info</h1>
            <button className={classes.btn_special}>Click</button>
        </div>
    )
}
