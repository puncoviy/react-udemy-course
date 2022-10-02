import { persons } from '../data/persons'
import { Person } from './Person'

export function Persons() {
    return persons.map((person) => {
        return (
            <Person key={person.id} {...person} />
            // <Person
            //     key={id}
            //     firstName={firstName}
            //     lastName={lastName}
            //     email={email}
            //     img={img}
            // />
        )
    })
}
