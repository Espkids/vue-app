import axios from 'axios'
export default {
  register (credentials) {
    return axios
      .post('http://localhost:8000/api/user/', credentials)
      .then(response => response.data)
  },
  async login (credentials) {
    const result = await axios.post('http://localhost:8000/api/user/login', credentials)
      .then(res => {
        return res.data.status
      })
      .catch(err => {
        return err
      })
    return result
  }
}
