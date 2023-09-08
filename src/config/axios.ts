import axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: process.env.API_URL || '/api',
  // headers: {
  // Authorization: Cookies.get('jwt') ? `token ${Cookies.get('jwt')}` : '',
  // },
})

export default instance
