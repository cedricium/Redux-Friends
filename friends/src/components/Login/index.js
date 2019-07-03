import React, { useState} from 'react'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    // actionCreator here
  }

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <label>
        Username:{` `}
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="username"
        />
      </label>
      <label>
        Password:{` `}
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="********"
        />
      </label>
      <input type="submit" value="Sign In" />
    </form>
  )
}

export default Login
