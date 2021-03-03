import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import NewsList from './components/newsList.component';
import API_KEY from './config';

const App = () => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    getArticles();
  }, [setArticle]);

  const getArticles = () => {
    axios
      .get(`https://newsapi.org/v2/everything?q=keyword&apiKey=${API_KEY}`)
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
