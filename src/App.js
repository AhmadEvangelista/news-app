import './App.css';
import axios from 'axios';
import React, {useState, useEffect } from 'react';
import NewsList from './components/newsList.component';

const App = () => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    getArticles();
  }, [setArticle]);

  const getArticles = () => {
    axios
      .get(
        'https://newsapi.org/v2/everything?q=keyword&apiKey=21774842674a4892ad9155b1ee416ad2'
      )
      .then((res) => {
        const articles = res.data.articles;
        setArticle(articles);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className='App'>
      <NewsList article={article} />
    </div>
  );
};

export default App;
