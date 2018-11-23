import React from 'react';

const ArticleViewer = ({ article }) => {
  return (
    <div className="ArticleViewer">
      <h1>{article.title}</h1>
      <p>{article.body}</p>
    </div>
  );
};

export default ArticleViewer;
