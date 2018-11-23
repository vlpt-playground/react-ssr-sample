import { handleActions } from 'redux-actions';
import * as fakeApi from '../lib/fakeApi';
import createPromiseThunk from '../lib/createPromiseThunk';

const GET_ARTICLES = 'articles/GET_ARTICLES';
const GET_ARTICLES_SUCCESS = 'articles/GET_ARTICLES_SUCCESS';

const GET_ARTICLE = 'articles/GET_ARTICLE';
const GET_ARTICLE_SUCCESS = 'articles/GET_ARTICLE_SUCCESS';

export const getArticles = createPromiseThunk(
  GET_ARTICLES,
  fakeApi.getArticles
);
export const getArticle = createPromiseThunk(GET_ARTICLE, fakeApi.getArticle);

const initialState = {
  list: null,
  item: null
};

export default handleActions(
  {
    [GET_ARTICLES_SUCCESS]: (state, action) => ({
      ...state,
      list: action.payload
    }),
    [GET_ARTICLE_SUCCESS]: (state, action) => ({
      ...state,
      item: action.payload
    })
  },
  initialState
);
