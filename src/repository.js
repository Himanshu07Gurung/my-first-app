import axios from 'axios'
import config from './config'
let Repository = axios.create({
  baseURL : config.API_URL,
  headers:{
    "Accept": "application/json",
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})
export default Repository