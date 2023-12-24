import { useState } from "react"

import blogService from '../services/blogs'
 


const BlogForm = ({setBlogs, blogs}) => {

    const createBlog = async (e) => {
        e.preventDefault()
        //can include constraints for the length of the fields in the front-end
        const blogObject = {
            title,
            author,
            url
        }
        const blog = await blogService.create(blogObject)
        console.log(blogs)
        setBlogs([...blogs, blog])
        
        setTitle('')
        setAuthor('')
        setUrl('')
        //can include try-catch here and display some errors or success message
    }

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')


    return (
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
    )
}


export default BlogForm