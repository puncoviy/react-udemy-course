import './App.css'
import { Wrapper } from './components/Wrapper'

function App(props) {
    return (
        <div className="App">
            <Wrapper color="lightblue">
                <h2>Text inside</h2>
                <button>CLICK</button>
            </Wrapper>
            <Wrapper color="lightgreen">
                <h2>Text inside second</h2>
                <button>wooooow</button>
            </Wrapper>
        </div>
    )
}

export default App
