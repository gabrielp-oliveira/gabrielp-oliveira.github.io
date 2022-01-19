import axios from 'axios';

const serverUrl = process.env.REACT_APP_NODE_APPLICATION?process.env.REACT_APP_NODE_APPLICATION:'http://localhost:8080/sendEmail'
const api = axios.create({
    baseURL: serverUrl,
    params: {
        id: localStorage.getItem('UserId')
      }, headers: { authentication: `Bearer ${localStorage.getItem('token')}` }
});

export default api;