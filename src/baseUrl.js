
import Axios from 'axios';
const axiosBaseURL = Axios.create({
    baseURL: process.env.baseUrl || "http://precious-voyage.onvirotech.com",

});
export default axiosBaseURL;