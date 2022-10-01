import { useState } from 'react'
import { generateNumber } from '../utils/generateNumber'

export function RandomNumber({ maxNum }) {
    const [number, setNumber] = useState(maxNum)
    const newNumber = () => setNumber(generateNumber(maxNum))
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={newNumber}>Generate new number</button>
        </div>
    )
}
