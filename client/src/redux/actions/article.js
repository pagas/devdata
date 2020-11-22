import {
    ARTICLE_FETCH,
    ARTICLES_FETCH,
    ARTICLE_CREATE_FAIL,
    ARTICLE_CREATE_SUCCESS,
    SET_MESSAGE
} from "./types";

import ArticleService from "../../services/article.service";

export const creteArticle = (title, body) => (dispatch) => {
    return ArticleService.createArticle(title, body).then(
        (response) => {
            dispatch({type: ARTICLE_CREATE_SUCCESS});
            dispatch({type: SET_MESSAGE, payload: response.data.message})
            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            dispatch({type: ARTICLE_CREATE_FAIL});
            dispatch({type: SET_MESSAGE, payload: message});
            return Promise.reject();
        }
    )
}

export const getArticle = (id) => (dispatch) => {
    return ArticleService.getArticleById(id).then(
        (response) => {
            dispatch({type: ARTICLE_FETCH, payload: response.data});
            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            dispatch({type: SET_MESSAGE, payload: message});
            return Promise.reject();
        }
    )
}

export const getArticles = () => (dispatch) => {
    return ArticleService.getAllArticles().then(
        (response) => {
            dispatch({type: ARTICLES_FETCH, payload: response.data.articles});
            dispatch({type: SET_MESSAGE, payload: response.data.message})
            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({type: SET_MESSAGE, payload: message});
            return Promise.reject();
        }
    )
}
