import { useEffect, useState } from 'react'
import Togglable from './Togglable'

const Blog = ({ blog, user, updateBlog, deleteBlog }) => {

  const [likes, setLikes] = useState(0)
  const [likeLabel, setLikeLabel] = useState('')

  const hasLiked = () => blog.likesList
    .filter(likedUser => likedUser.username === user.username)
    .length > 0

  useEffect(() => {
    setLikes(blog.likesList.length)
    setLikeLabel(
      hasLiked()
        ? 'unlike'
        : 'like'
    )
  }, [])


  const toggleLike = async (e) => {
    e.preventDefault()
    const body = {
      like: hasLiked() ? 0 : 1
    }

    blog = await updateBlog(blog.id, body)
    setLikes(blog.likesList.length)
    setLikeLabel(
      hasLiked()
        ? 'unlike'
        : 'like'
    )
  }

  const remove = async () => {
    const confirmed = window.confirm(`Delete blog ${blog.title}?`)

    if (confirmed) {
      await deleteBlog(blog.id)
    }
  }

  return (
    <div className="blog-container">
      <span className="blogMainContent">{blog.title} by {blog.author}</span>
      <Togglable buttonDisplay='inline' buttonLabel='view'>
        <div>URL: {blog.url}</div>
        <div>
          <span>likes: {likes}</span>
          <button onClick={toggleLike}>{likeLabel}</button>
        </div>
        <div>User: {blog.user.name}</div>
        {user.username === blog.user.username
          && <button onClick={remove}>delete</button>}
      </Togglable>
    </div>
  )
}

export default Blog