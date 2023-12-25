import Togglable from "./Togglable"

const Blog = ({ blog }) => (
  <div className="blog-container">
    <span className="blogMainContent">{blog.title} {blog.author}</span>
    <Togglable buttonDisplay='inline' buttonLabel='view'>banana</Togglable>
  </div>  
)

export default Blog