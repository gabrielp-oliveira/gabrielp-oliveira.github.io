import axios from 'axios';

const serverUrl = process.env.REACT_APP_NODE_APPLICATION?process.env.REACT_APP_NODE_APPLICATION:'http://localhost:8080/checkVisit'
const api = axios.create({
    baseURL: serverUrl,
   });

export default api;