import { useState } from 'react'
import './App.css'
import { Button } from './components/Button'
import { Counter } from './components/Counter'

const texts = ['Click1', 'Click2', 'Click3', 'Click4', 'Click5', 'Click6']

function App() {
    const [counter, setCounter] = useState(0)
    const increment = () => setCounter(counter + 1)
    return (
        <div className="App">
            <Counter counter={counter} />
            {texts.map((text) => (
                <Button onClick={increment} key={text} btnText={text} />
            ))}
        </div>
    )
}

export default App
