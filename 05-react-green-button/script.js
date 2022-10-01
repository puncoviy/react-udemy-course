const Btn = ({ initialBtnText, initialBtnClass }) => {
    const [btnText, setBtnText] = React.useState(initialBtnText)
    const [btnClass, setBtnClass] = React.useState(initialBtnClass)

    const onBtnClick = () => {
        setBtnText('clicked')
        setBtnClass('clicked-btn')
    }

    return (
        <button className={btnClass} onClick={onBtnClick}>
            {btnText}
        </button>
    )
}

const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)
root.render(<Btn initialBtnText="Click me" initialBtnClass="" />)
