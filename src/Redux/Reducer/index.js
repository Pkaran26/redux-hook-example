import { combineReducers } from 'redux'
import postReducer from './postReducer'
import imageReducer from './imageReducer'

const rootReducer = combineReducers({
  post: postReducer,
  image: imageReducer
})

export default rootReducer
