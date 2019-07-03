import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Login from './components/Login'
import Friends from './components/Friends'
import PrivateRoute from './components/PrivateRoute'

function App(props) {
  return (
    <div className="App">
      {props.error && <p>{props.error}</p>}
      <Route path="/login" component={Login} />
      <PrivateRoute exact path="/" component={Friends} isLoggedIn={!!props.token} />
    </div>
  )
}

const mapStateToProps = state => ({
  token: state.token,
  error: state.error,
})

export default connect(mapStateToProps)(App)
