import React from 'react'

const Photo = ({ url, close })=>(
  <div className="photo" onClick={ close }>
    <img src={ url } alt="big" />
  </div>
)

export default Photo
