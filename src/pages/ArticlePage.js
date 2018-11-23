import React from 'react';
import ArticleViewerContainer from '../containers/ArticleViewerContainer';

const ArticlePage = ({ match }) => {
  return <ArticleViewerContainer id={parseInt(match.params.articleId)} />;
};

export default ArticlePage;
