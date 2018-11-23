import React from 'react';
import { Link } from 'react-router-dom';

const ArticlesList = ({ list }) => {
  return (
    <ul>
      {list.map(item => (
        <li key={item.id}>
          <Link to={`/articles/${item.id}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ArticlesList;
