import './Main.css';
import React from 'react';

import Article from '../Article/Article.js';

function Main({ articles, section }) {
  const buildArticles = () => {
    if(articles) {
     return articles.map((article) => <Article key={article.id} details={article} />)
    }
  }

  const buildTitle = () => {
    if(!section) return <h2>Today's Top Stories:</h2>
    return (
      <h2 className="title-today">Today's {section} Stories:</h2>
    )
  }

  return (
    <main>
      {buildTitle()}
      {buildArticles()}
    </main>
  )
}

export default Main