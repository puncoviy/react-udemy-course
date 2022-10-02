import { useState } from 'react'
import './App.css'
import { Button } from './components/Button'
import { Counter } from './components/Counter'
import { ResetButton } from './components/ResetButton'

function App() {
    const [counter, setCounter] = useState(0)
    const increment = () => setCounter(counter + 1)
    return (
        <div className="App">
            <Counter counter={counter} />
            <Button onClick={increment} btnText="Click1" />
            <Button onClick={increment} btnText="Click2" />
            <Button onClick={increment} btnText="Click3" />
            <Button onClick={increment} btnText="Click4" />
            {!!counter && <ResetButton onClick={() => setCounter(0)} />}
        </div>
    )
}

export default App
