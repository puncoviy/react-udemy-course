export function Wrapper(props) {
    const style = {
        backgroundColor: props.color,
        width: '250px',
        padding: '10px',
        margin: '0 auto',
    }
    return <div style={style}>{props.children}</div>
}
