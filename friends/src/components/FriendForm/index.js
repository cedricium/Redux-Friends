import React, { useState } from 'react'

const FriendForm = props => {
  const [name, setName] = useState('')
  const [age, setAge] = useState(null)
  const [email, setEmail] = useState('')

  const clearForm = () => {
    setName('')
    setAge('')
    setEmail('')
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.addFriend({ name, age, email })
    clearForm()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:{` `}
        <input
          type="text"
          placeholder="Jane Smith"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label>
        Age:{` `}
        <input
          type="number"
          placeholder="23"
          value={age}
          onChange={e => setAge(e.target.value)}
        />
      </label>
      <label>
        Email:{` `}
        <input
          type="email"
          placeholder="jane.smith@example.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <input type="submit" value="Add Friend" />
    </form>
  )
}

export default FriendForm
