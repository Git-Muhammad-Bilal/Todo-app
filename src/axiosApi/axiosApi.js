import axios from "axios";

const axiosApi = axios.create({
    baseURL: 'https://netlifytodosserver.netlify.app'

})

axiosApi.interceptors.request.use(function (config) {

    let lsVal = localStorage.getItem('jwtToken');
    let token = JSON.parse(lsVal)
    config.headers.Authorization =token && `bearer ${token[0]?.jwtToken}`
    return config;
    
    
}, function (error) {
    return Promise.reject(error)
});

axiosApi.interceptors.response.use(function (response) {
    
    if (response.data.jwtToken) {
        let tokenData = [{jwtToken:response.data.jwtToken, email:response.data.email}]
        let stringy = JSON.stringify(tokenData)
        localStorage.setItem('jwtToken', stringy)
    }
    return response;
}, function (error) {
    console.log(error.message, 'meaasge');
    return Promise.reject(error)
});

export default axiosApi;


