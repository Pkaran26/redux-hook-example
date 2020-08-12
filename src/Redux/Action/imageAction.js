import { SERVER_URL } from '../../config'
import {
  FETCH_ALBUM,
  FETCH_PHOTO,
  FETCH_TODOS
} from '../types'
import axios from 'axios'

export const fetchAlbum = ()=> dispatch=>{
  axios.get(`${ SERVER_URL }/albums`)
  .then(res=>{
    dispatch({ type: FETCH_ALBUM, payload: res.data })
  })
  .catch(err=>{
    dispatch({ type: FETCH_ALBUM, payload: [] })
  })
}

export const fetchPhotos = (id=null)=> dispatch=>{
  const url = id? `${ SERVER_URL }/photos?albumId=${ id }` : `${ SERVER_URL }/photos`
  axios.get(url)
  .then(res=>{
    dispatch({ type: FETCH_PHOTO, payload: res.data })
  })
  .catch(err=>{
    dispatch({ type: FETCH_PHOTO, payload: [] })
  })
}

export const fetchTodos = ()=> dispatch=>{
  axios.get(`${ SERVER_URL }/todos`)
  .then(res=>{
    dispatch({ type: FETCH_TODOS, payload: res.data })
  })
  .catch(err=>{
    dispatch({ type: FETCH_TODOS, payload: [] })
  })
}
