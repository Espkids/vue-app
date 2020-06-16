import axios from 'axios'
export default {
  register (credentials) {
    return axios
      .post('http://localhost:8000/api/user/', credentials)
      .then(response => response.data)
  },
  async login (credentials) {
    const result = await axios.post('http://localhost:8000/api/service/login', credentials)
      .then(res => {
        return res.data
      })
      .catch(err => {
        // err.response.status
        return err
      })
    return result
  }
}
