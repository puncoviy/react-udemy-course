import { useState } from 'react'

export function Login() {
    const [data, setData] = useState({ username: '', password: '' })
    const handleFormSubmit = (event) => {
        event.preventDefault()
        alert(JSON.stringify(data))
    }
    const handleInputChange = (event, name) =>
        setData({ ...data, [name]: event.target.value })
    return (
        <>
            <h1>Login Form</h1>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={data.username}
                        onChange={(event) =>
                            handleInputChange(event, 'username')
                        }
                        // name="username"
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={data.password}
                        onChange={(event) =>
                            handleInputChange(event, 'password')
                        }
                        // name="password"
                    />
                </label>
                <button type="submit">Login</button>
            </form>
        </>
    )
}
