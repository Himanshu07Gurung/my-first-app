import config from '../config'
import Repository from '../repository'

export default {
  postsList () {
    return Repository.get(`${config.API_URL}/posts`)
  },
  get (id) {
    return Repository.get(`${config.API_URL}/posts/${id}`)
  },
  create (params){
    return Repository.post(`${config.API_URL}/posts`, params)
  },
  update (id, params){
    return Repository.put(`${config.API_URL}/posts/${id}`, params)
  },
  delete(id){
    return Repository.delete(`${config.API_URL}/posts/${id}`)
  }
}