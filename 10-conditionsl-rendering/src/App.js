import './App.css'
import { PetInfo } from './components/PetInfo'

function App() {
    return (
        <div className="App">
            <PetInfo hasPet={true} animal="cat" age={1} />
            <PetInfo hasPet={false} />
        </div>
    )
}

export default App
