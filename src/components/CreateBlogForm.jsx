import { useState } from "react"

import Notification from "./Notification"
import blogService from '../services/blogs'



const BlogForm = ({ setBlogs, blogs }) => {

    const [message, setMessage] = useState(null)
    const [error, setError] = useState(null)
    
    const createBlog = async (e) => {
        e.preventDefault()
        try {

            //can include constraints for the length of the fields in the front-end
            const blogObject = {
                title,
                author,
                url
            }
            const blog = await blogService.create(blogObject)
            setBlogs([...blogs, blog])

            const message = `A new blog '${blog.title}' by ${blog.author} was added!`

            setMessage(message)
            setTimeout(()=> {
                setMessage(null)
            }, 5000)

            
            //can include try-catch here and display some errors or success message
        } catch (error) {
            setError('Missing fields or insufficient field length!')
            setTimeout(()=> {
                setError(null)
            }, 5000)
        } finally {
            setTitle('')
            setAuthor('')
            setUrl('')
        }
    }

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')


    return (<div>
        <Notification error={error} message={message}></Notification>
        <form onSubmit={createBlog}>
            <h3>Create new post</h3>
            <div>
                title
                <input type='text'
                    value={title}
                    name='Title'
                    onChange={({ target }) => setTitle(target.value)}
                ></input>
            </div>
            <div>
                author
                <input type='text'
                    value={author}
                    name='Author'
                    onChange={({ target }) => setAuthor(target.value)}
                ></input>
            </div>
            <div>
                url
                <input type='text'
                    value={url}
                    name='Url'
                    onChange={({ target }) => setUrl(target.value)}
                ></input>
            </div>
            <button type="submit">create</button>
            <br></br>
            <br></br>
        </form>
    </div>
    )
}


export default BlogForm