import React from 'react';
import { Route } from 'react-router-dom';
import ArticlePage from './ArticlePage';
import ArticleListContainer from '../containers/ArticleListContainer';

const ArticlesPage = () => {
  return (
    <div>
      <ArticleListContainer />
      <Route
        exact
        path="/articles"
        render={() => <div>게시글을 선택하세요.</div>}
      />
      <Route path="/articles/:articleId" component={ArticlePage} />
    </div>
  );
};

export default ArticlesPage;
