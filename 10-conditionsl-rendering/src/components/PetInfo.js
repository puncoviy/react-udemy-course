export function PetInfo({ animal, age, hasPet }) {
    return (
        <h1>
            {hasPet
                ? `My ${animal} is ${age} years old`
                : `I don't have an animal`}
        </h1>
    )
}
