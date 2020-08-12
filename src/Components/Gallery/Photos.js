import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos } from '../../Redux/Action/imageAction'
import Photo from './Photo'

const Photos = ({ match })=>{
  const [current, setCurrent] = useState('')
  const [sPhotos, setSPhotos] = useState([])

  const photos = useSelector(state => state.image.photos)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchPhotos(match.id))
  }, [match])

  useEffect(()=>{
    if(photos && photos.length>0){
      const temp = photos.slice(0, 100)
      setSPhotos(temp)
    }
  }, [photos])

  return (
    <div className="">
      { sPhotos.length>0?
        sPhotos.map((e, i)=>(
          <img alt={ e.thumbnailUrl } key={ i } className="thumb" src={ e.thumbnailUrl } onClick={ ()=> setCurrent(e.url) } />
        ))
      :null }
      { current?
        <Photo url={ current } close={ ()=> setCurrent('') } />
      :null }
    </div>
  )
}

export default Photos
