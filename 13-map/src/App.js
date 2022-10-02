import { useState } from 'react'
import './App.css'
import { Button } from './components/Button'
import { Counter } from './components/Counter'

function App() {
    const [counter, setCounter] = useState(0)
    const increment = () => setCounter(counter + 1)
    return (
        <div className="App">
            <Counter counter={counter} />
            <Button onClick={increment} />
            <Button onClick={increment} />
            <Button onClick={increment} />
            <Button onClick={increment} />
        </div>
    )
}

export default App
