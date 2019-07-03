// import action types
import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  API_REQUEST_START,
  API_REQUEST_SUCCESS,
  API_REQUEST_FAILURE,
} from '../actions'

// setup initial state
const initialState = {
  // auth-related
  loggingIn: false,
  token: null,
  // CRUD-related
  makingAPIRequest: false,
  friends: [],
  // general application-related
  error: null,
}

// export reducer function
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        token: action.payload,
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        error: action.payload,
      }
    case API_REQUEST_START:
      return {
        ...state,
        makingAPIRequest: true,
      }
    case API_REQUEST_SUCCESS:
      return {
        ...state,
        makingAPIRequest: false,
        friends: action.payload,
      }
    case API_REQUEST_FAILURE:
      return {
        ...state,
        makingAPIRequest: false,
        error: action.payload,
      }
    default:
      return state
  }
}
