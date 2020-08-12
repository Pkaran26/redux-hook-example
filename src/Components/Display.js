import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPost, fetchComment, fetchUser } from '../Redux/Action/postAction'
import { fetchAlbum, fetchPhotos, fetchTodos } from '../Redux/Action/imageAction'

const Display = ()=>{
  const [loading, setLoading] = useState(false)

  const post = useSelector(state => state.post)
  const image = useSelector(state => state.image)

  const arr = [
    { func: fetchPost, name: 'Post', data: post.posts.length },
    { func: fetchComment, name: 'Comment', data: post.comments.length },
    { func: fetchUser, name: 'User', data: post.users.length },
    { func: fetchAlbum, name: 'Album', data: image.albums.length },
    { func: fetchPhotos, name: 'Photos', data: image.photos.length },
    { func: fetchTodos, name: 'Todos', data: image.todos.length }
  ]

  return (
    <div className="container">
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>S no.</th>
            <th>Name</th>
            <th>Total Count</th>
            <th>Actions</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          { arr.map((e, i)=>(
            <tr>
              <td>{ i + 1 }.</td>
              <td>{ e.name }</td>
              <td>
                <span class="badge badge-info">{ e.data }</span>
              </td>
              <td>
                <Button { ...e } disabled={ loading } />
              </td>
              <td>
                { e.data?
                  <Image alt={ e.name } />
                  :
                  <WrongImage alt={`${ e.name }2`} />
                }
              </td>
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  )
}

const Button = ({ func, name, disabled })=>{
  const dispatch = useDispatch()

  return (
    <button
      className="btn btn-primary"
      style={{ width: '130px' }}
      disabled={ disabled }
      onClick={ () => dispatch(func()) }
    >Fetch { name }</button>
  )
}

const Image = ({ alt })=>(
  <img
    src="https://images.vexels.com/media/users/3/157931/isolated/preview/604a0cadf94914c7ee6c6e552e9b4487-curved-check-mark-circle-icon-by-vexels.png"
    style={{ width: '30px' }}
    alt={ alt }
  />
)

const WrongImage = ({ alt })=>(
  <img
    src="https://simpleicon.com/wp-content/uploads/refresh.png"
    style={{ width: '30px' }}
    alt={ alt }
  />
)

export default Display
