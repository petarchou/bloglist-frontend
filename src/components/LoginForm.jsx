import { useState } from 'react'

import Notification from './Notification'
import loginService from '../services/login'

const LoginForm = ({ setUser }) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState(null)

  const handleLogin = async (e) => {
    e.preventDefault()
    try{

      const loggedUser = await loginService.login({ username, password })
      setUser(loggedUser)
    } catch (error) {
      setLoginError('Invalid Credentials')
      setTimeout(() => {
        setLoginError(null)
      }, 5000)
    } finally {
      setUsername('')
      setPassword('')
    }

  }

  return (<div>
    <Notification error={loginError}></Notification>
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