import axios from 'axios';
import authHeader from "./auth-header";
import {API_ROOT} from "../api-config";

const API_URL = `${API_ROOT}/article/`;

const getAllArticles = () => {
    return axios.get(`${API_URL}all`, {headers: authHeader()});
}

const getArticleById = (id) => {
    return axios.get(`${API_URL}view/${id}`, {headers: authHeader()});
}

const createArticle = (title, body) => {
    return axios.post(`${API_URL}create`, {
        title,
        body,
    }, {
        headers: authHeader()
    });
}


export default {
    getAllArticles,
    getArticleById,
    createArticle
}
