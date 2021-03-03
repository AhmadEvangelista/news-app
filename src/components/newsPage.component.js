import React from 'react';

const NewsPage = (props) => {
  console.log(props.articles.title);
  return (
    <div>
      <h2>{props.articles.title}</h2>
      <h4>{props.articles.author}</h4>
      <p>{props.articles.content}</p>
    </div>
  );
};

export default NewsPage;
