import {
  FETCH_POST,
  FETCH_COMMENT,
  FETCH_USERS
} from '../types'

const initialState = {
  posts: [],
  comments: [],
  users: []
}

const postReducer = (state = initialState, action)=>{
  switch (action.type) {
    case FETCH_POST:
      return { ...state, posts: action.payload }
    case FETCH_COMMENT:
      return { ...state, comments: action.payload }
    case FETCH_USERS:
      return { ...state, users: action.payload }
    default:
      return state
  }
}

export default postReducer
