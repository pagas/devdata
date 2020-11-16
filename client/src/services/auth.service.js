import axios from 'axios';
import {API_ROOT} from '../api-config';

const API_URL = `${API_ROOT}/user/`;

const register = (username, email, password) => {
    return axios.post(`${API_URL}signup`, {
        username,
        email,
        password
    })
}

const login = (email, password) => {
    return axios.post(`${API_URL}login`, {
        email,
        password
    }).then((response) => {
        if (response.data.accessToken) {
            localStorage.setItem('user', JSON.stringify(response.data))
        }
        return response.data;
    })
}

const logout = () => {
    localStorage.removeItem('user')
}

export default {
    register,
    login,
    logout
}

