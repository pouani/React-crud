import axios from "axios";
import { accountService } from "./accountService";

const Axios = axios.create({
    baseURL : "http://127.0.0.1:8002/api",
});

/**
 * Add a request interceptor
 */
Axios.interceptors.request.use(request => {

    // Get token from local storage
    if(accountService.isLogged()){
        let token = localStorage.getItem('token');
        request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
});

export default Axios;