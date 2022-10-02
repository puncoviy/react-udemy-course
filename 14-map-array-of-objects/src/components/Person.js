export function Person({ img, firstName, lastName, email }) {
    return (
        <div>
            <img src={img} alt={firstName} />
            <div>
                <span>
                    {firstName} {lastName}
                </span>
                <p>{email}</p>
            </div>
        </div>
    )
}
