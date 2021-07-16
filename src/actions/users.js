import config from '../config'
import Repository from '../repository'

export default {
  usersList () {
    return Repository.get(`${config.API_URL}/users`)
  },
}