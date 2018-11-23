import * as articleActions from './modules/articles';
import { bindActionCreators } from 'redux';

const prefetchConfig = [
  {
    path: '/articles',
    prefetch: store => {
      const ArticleActions = bindActionCreators(articleActions, store.dispatch);
      return ArticleActions.getArticles();
    }
  },
  {
    path: '/articles/:articleId',
    prefetch: (store, params) => {
      const ArticleActions = bindActionCreators(articleActions, store.dispatch);
      return ArticleActions.getArticle(parseInt(params.articleId));
    }
  }
];

export default prefetchConfig;
