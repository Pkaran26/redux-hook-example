import { SERVER_URL } from '../../config'
import {
  FETCH_POST,
  FETCH_COMMENT,
  FETCH_USERS
} from '../types'
import axios from 'axios'

export const fetchPost = ()=> dispatch=>{
  axios.get(`${ SERVER_URL }/posts`)
  .then(res=>{
    dispatch({ type: FETCH_POST, payload: res.data })
  })
  .catch(err=>{
    dispatch({ type: FETCH_POST, payload: [] })
  })
}

export const fetchComment = ()=> dispatch=>{
  axios.get(`${ SERVER_URL }/comments`)
  .then(res=>{
    dispatch({ type: FETCH_COMMENT, payload: res.data })
  })
  .catch(err=>{
    dispatch({ type: FETCH_COMMENT, payload: [] })
  })
}

export const fetchUser = ()=> dispatch=>{
  axios.get(`${ SERVER_URL }/users`)
  .then(res=>{
    dispatch({ type: FETCH_USERS, payload: res.data })
  })
  .catch(err=>{
    dispatch({ type: FETCH_USERS, payload: [] })
  })
}
