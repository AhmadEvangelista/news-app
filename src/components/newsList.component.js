import React from 'react';
import NewsPage from './newsPage.component';

const NewsList = (props) => {
  return (
    <div>
      {props.article.map((articles) => {
        return <NewsPage key={articles.id} articles={articles} />;
      })}
    </div>
  );
};

export default NewsList;
