import React, { useEffect } from 'react'
import DataTable from 'react-data-table-component'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPost, fetchComment, fetchUser } from '../../Redux/Action/postAction'

const Blog = ()=>{
  const post = useSelector(state => state.post)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchPost())
    dispatch(fetchComment())
    dispatch(fetchUser())
    // eslint-disable-next-line
  }, [])

  const postCol = [
    { name: 'userId', selector: 'userId', sortable: true },
    { name: 'Id', selector: 'id', sortable: true },
    { name: 'Title', selector: 'title', sortable: true },
    { name: 'Body', selector: 'body', sortable: true }
  ]

  const commentCol = [
    { name: 'PostId', selector: 'postId', sortable: true },
    { name: 'Id', selector: 'id', sortable: true },
    { name: 'Name', selector: 'name', sortable: true },
    { name: 'Email', selector: 'email', sortable: true },
    { name: 'Body', selector: 'body', sortable: true }
  ]

  const userCol = [
    { name: 'Id', selector: 'id', sortable: true },
    { name: 'Name', selector: 'name', sortable: true },
    { name: 'Username', selector: 'username', sortable: true },
    { name: 'Email', selector: 'email', sortable: true },
    { name: 'Street', selector: 'address.street', sortable: true },
    { name: 'City', selector: 'address.city', sortable: true },
    { name: 'Zipcode', selector: 'address.zipcode', sortable: true },
    { name: 'Phone', selector: 'phone', sortable: true },
    { name: 'Website', selector: 'website', sortable: true },
    { name: 'Company', selector: 'company.name', sortable: true }
  ]

  return (
    <div>
      <div className="card bg-light">
        <div className="card-body">
          <DataTable
            title="Posts"
            columns={ postCol }
            data={ post.posts }
            pagination={ true }
          />
        </div>
      </div>
      <div className="card bg-light">
        <div className="card-body">
          <DataTable
            title="Comments"
            columns={ commentCol }
            data={ post.comments }
            pagination={ true }
          />
        </div>
      </div>
      <div className="card bg-light">
        <div className="card-body">
          <DataTable
            title="Users"
            columns={ userCol }
            data={ post.users }
            pagination={ true }
          />
        </div>
      </div>
    </div>
  )
}

export default Blog
