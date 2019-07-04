import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { getFriends } from '../../actions'

const Logo = styled.img`
  width: 100%;
  max-width: 15rem;
`

const Friends = (props) => {
  useEffect(() => {
    props.getFriends()
  })

  return (
    <div>
      <Logo src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Friends_logo.svg" />
      {props.friends.map(friend => (
        <div key={friend.id}>
          <p><strong>Name: </strong>{friend.name}</p>
          <p><strong>Age: </strong>{friend.age}</p>
          <p><strong>Email: </strong>{friend.email}</p>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = state => ({
  friends: state.friends,
})

export default connect(mapStateToProps, { getFriends })(Friends)
