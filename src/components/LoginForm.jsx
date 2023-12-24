import loginService from '../services/login'
import { useState } from 'react'

const LoginForm = ({setUser}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault()
        const loggedUser = await loginService.login({ username, password })
        setUser(loggedUser)
        setUsername('')
        setPassword('')

    }

    return (<div>
        <form onSubmit={handleLogin}>
            <div>
                username
                <input
                    type='text'
                    value={username}
                    name='Username'
                    onChange={({ target }) => setUsername(target.value)}></input>
            </div>
            <div>
                password
                <input
                    type="password"
                    value={password}
                    name="Password"
                    onChange={({ target }) => setPassword(target.value)}
                />
            </div>
            <button type="submit">login</button>
        </form>
    </div>)
}

export default LoginForm