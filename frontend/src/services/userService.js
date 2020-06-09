import axios from 'axios'
export default {
  register (credentials) {
    return axios
      .post('http://localhost:8000/api/user/', credentials)
      .then(response => response.data)
  }
}
