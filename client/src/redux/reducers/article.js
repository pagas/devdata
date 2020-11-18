import {
    ARTICLES_FETCH,
    ARTICLE_CREATE_SUCCESS,
    ARTICLE_FETCH
} from "../actions/types";

const initialState = {
    articles: [],
    article: {}
};

export default function (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case ARTICLES_FETCH:
            return {
                ...state,
                articles: payload
            }
        case ARTICLE_FETCH:
            return {
                ...state,
                article: payload
            }
        case ARTICLE_CREATE_SUCCESS:
            return {
                ...state,
                article: payload
            }
        default:
            return state;
    }

}
