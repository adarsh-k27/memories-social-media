import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/memories/api/"
})
export default axiosInstance;