import {
  FETCH_ALBUM,
  FETCH_PHOTO,
  FETCH_TODOS
} from '../types'

const initialState = {
  albums: [],
  photos: [],
  todos: [],
}

const imageReducer = (state = initialState, action)=>{
  switch (action.type) {
    case FETCH_ALBUM:
      return { ...state, albums: action.payload }
    case FETCH_PHOTO:
      return { ...state, photos: action.payload }
    case FETCH_TODOS:
      return { ...state, todos: action.payload }
    default:
      return state
  }
}

export default imageReducer
