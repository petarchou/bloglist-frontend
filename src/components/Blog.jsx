import Togglable from "./Togglable"

const Blog = ({ blog }) => {

  // console.log(`blog ${blog.title} has user ${blog.user}`)

  return (
    <div className="blog-container">
      <span className="blogMainContent">{blog.title} by {blog.author}</span>
      <Togglable buttonDisplay='inline' buttonLabel='view'>
        <div>URL: {blog.url}</div>
        <div>
          <span>likes: {blog.likes}</span>
          <button>like</button>
          </div>
        <div>User: {blog.user.name}</div>
      </Togglable>
    </div>
  )
} 

export default Blog