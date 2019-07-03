import React, { useState } from 'react'
import { connect } from 'react-redux'
import { login } from '../../actions'

const Login = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    await props.login({username, password})
    await props.history.push('/')
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

export default connect(null, { login })(Login)
