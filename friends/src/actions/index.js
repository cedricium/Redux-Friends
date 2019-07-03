import axios from 'axios'

// action types
const LOGIN_START = 'LOGIN_START'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAILURE = 'LOGIN_FAILURE'
const API_REQUEST_START = 'API_REQUEST_START'
const API_REQUEST_SUCCESS = 'API_REQUEST_SUCCESS'
const API_REQUEST_FAILURE = 'API_REQUEST_FAILURE'

// action creators
export const login = () => async dispatch => {
  dispatch({ type: LOGIN_START })
  try {
    const { data } = await axios.post()
    dispatch({ type: LOGIN_SUCCESS, payload: /* TODO */ })
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, error: error.message })
  }
}

export const getFriends = () => async dispatch => {
  dispatch({ type: API_REQUEST_START })
  try {
    const { data } = await axios.get()
    dispatch({ type: API_REQUEST_SUCCESS, payload: /* TODO */ })
  } catch (error) {
    dispatch({ type: API_REQUEST_FAILURE, error: error.message })
  }
}

export const addFriend = () => async dispatch => {
  dispatch({ type: API_REQUEST_START })
  try {
    const { data } = await axios.post()
    dispatch({ type: API_REQUEST_SUCCESS, payload: /* TODO */ })
  } catch (error) {
    dispatch({ type: API_REQUEST_FAILURE, error: error.message })
  }
}

export const updateFriend = () => async dispatch => {
  dispatch({ type: API_REQUEST_START })
  try {
    const { data } = await axios.put()
    dispatch({ type: API_REQUEST_SUCCESS, payload: /* TODO */ })
  } catch (error) {
    dispatch({ type: API_REQUEST_FAILURE, error: error.message })
  }
}

export const deleteFriend = () => async dispatch => {
  dispatch({ type: API_REQUEST_START })
  try {
    const { data } = await axios.delete()
    dispatch({ type: API_REQUEST_SUCCESS, payload: /* TODO */ })
  } catch (error) {
    dispatch({ type: API_REQUEST_FAILURE, error: error.message })
  }
}
