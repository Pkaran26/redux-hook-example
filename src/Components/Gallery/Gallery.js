import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAlbum } from '../../Redux/Action/imageAction'
import { NavLink } from 'react-router-dom'

const Gallery = ()=>{
  const albums = useSelector(state => state.image.albums)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchAlbum())
  }, [])

  return (
    <div className="">
      { albums.length>0?
        albums.map((e, i)=>(
          <div key={ i } className="card bg-light" style={{ marginBottom: '5px' }}>
            <div className="card-body">
              <h2>{ e.title }</h2>
              <NavLink to={`/gallery/photos/${ e.id }`} className="btn btn-primary">View Album</NavLink>
            </div>
          </div>
        ))
      :null }
    </div>
  )
}

export default Gallery
