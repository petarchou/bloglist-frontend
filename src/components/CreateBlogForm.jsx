import { useState } from "react"

import Notification from "./Notification"



const BlogForm = ({ createBlog }) => {

    const [message, setMessage] = useState(null)
    const [error, setError] = useState(null)

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')
    
    const addBlog = async (e) => {
        e.preventDefault()
        try {

            //can include constraints for the length of the fields in the front-end
            const blogObject = {
                title,
                author,
                url
            }

            await createBlog(blogObject)

            const message = `A new blog '${blogObject.title}' by ${blogObject.author} was added!`

            setMessage(message)
            setTimeout(()=> {
                setMessage(null)
            }, 5000)

        } catch (error) {
            console.log(error)
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

    


    return (<div>
        <Notification error={error} message={message}></Notification>
        <form onSubmit={addBlog}>
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