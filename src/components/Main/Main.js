import './Main.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Article from '../Article/Article.js';
import SingleArticle from '../SingleArticle/SingleArticle.js'

function Main({ articles, section, id }) {
  const buildArticles = () => {
    if(articles && !id ) {
     return articles.map((article) => <Link to={`${article.id}`}> <Article key={article.id} details={article} /> </Link>)
    }
  }

  const buildTitle = () => {
    if(!section) return <h2 className="title-today">Today's Top Stories:</h2>
    if(id) return '';
    return (
      <h2 className="title-today">Today's {section} Stories:</h2>
    )
  }

  const buildSingleArticle = (id) => {
    let article;

    if(articles) {
      article = articles.find((art) => art.id === id);
    }

    if(article) {
      return <SingleArticle article={article}/>
    }
    
    return <h2>Sorry this page does not exist</h2>
  }

  const allArticles = buildArticles()
  const title = buildTitle()
  const singleArticle = id ? buildSingleArticle(id) : '';

  return (
    <main>
      {title}
      {allArticles}
      {singleArticle}
    </main>
  )
}

export default Main