import React from 'react'
import { 
  Route,
  Redirect,
} from 'react-router-dom'

import Login from './components/Login'
import Friends from './components/Friends'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = JSON.parse(localStorage.getItem('auth_token'))
  return (
    <Route {...rest} render={props => (
      !!isLoggedIn
      ? <Component {...props} />
      : <Redirect to="/login" />
    )}/>
  )
}

function App() {
  return (
    <div className="App">
      <Route path="/login" component={Login} />
      <PrivateRoute path="/" component={Friends} />
    </div>
  )
}

export default App
