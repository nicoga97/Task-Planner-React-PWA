import axios from 'axios';

export default axios.create({
    baseURL: 'https://task-panner-api.herokuapp.com/api/',
    timeout: 1000,
    headers: {'Authorization': 'Bearer ' + localStorage.getItem("accessToken")}
});