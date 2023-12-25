import axios from 'axios'

const baseUrl = '/api/blogs'

let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async blog => {

  const config = {
    headers: { Authorization: token },
  } 

  const response = await axios.post(baseUrl, blog, config)
  return response.data
}

const update = async (blogId, body) => {

  const config = {
    headers: { Authorization: token },
  } 

  const response = await axios.put(`${baseUrl}/${blogId}`, body, config)

  return response.data
  
}

const remove = async blogId => {
  const config = {
    headers: { Authorization: token },
  } 

  const response = await axios.delete(`${baseUrl}/${blogId}`, config)
  return response.data
}

export default { getAll, setToken, create, update, remove }