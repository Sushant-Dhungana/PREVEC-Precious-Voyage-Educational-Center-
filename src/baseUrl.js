
import Axios from 'axios';
const axiosBaseURL = Axios.create({
    baseURL: process.env.baseUrl || "http://192.168.1.12:8000",
    headers: {
        "Content-Type": "multipart/form-data",
      },

});
export default axiosBaseURL;