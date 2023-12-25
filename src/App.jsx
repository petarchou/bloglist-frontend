import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import LoginForm from './components/LoginForm'
import CreateBlogForm from './components/CreateBlogForm'
import Togglable from './components/Togglable'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => async () => {
      const returnedBlogs = await blogService.getAll()
      setBlogs(returnedBlogs)
  }, [user])

  useEffect(() => {
    const userJson = window.localStorage.getItem('loggedUser')
    if (userJson) {
      const loggedUser = JSON.parse(userJson)
      blogService.setToken(loggedUser.token)
      setUser(loggedUser)
    }
  }, [])

  const assignUser = (user) => {
    if (user) {
      setUser(user)
      blogService.setToken(user.token)
      window.localStorage.setItem('loggedUser', JSON.stringify(user))
    }
  }

  const logout = (e) => {
    e.preventDefault()
    window.localStorage.removeItem('loggedUser')
    blogService.setToken(null)
    window.location.reload()
  }

  const blogsList = () => {
    return (
      <div>
        {blogs.map(blog =>
      <Blog key={blog.id} blog={blog} />)}   
      </div>
    )
    }
    
    const createBlog = async (blogObject) => {
      console.log(blogObject)
      const createdBlog = await blogService.create(blogObject)
      setBlogs(blogs.concat(createdBlog))
    }

  return (
    <div>
      <h2>blogs</h2>

      {!user && <LoginForm setUser={assignUser}></LoginForm>}

      {user &&
        <div>
          <p>
          welcome {user.name}
          <button onClick={logout}>logout</button>
          </p>
          <Togglable buttonLabel='create blog'>
          <CreateBlogForm createBlog={createBlog}></CreateBlogForm>
          </Togglable>
          {blogsList()}
        </div>}



    </div>
  )
}

export default App