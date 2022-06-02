import './SingleArticle.css'

import React from 'react'

function SingleArticle ({article}) {
  
  const publishedDate = new Date(article.published_date)

  return (
    <div className="single-article">
      <div className="content">
      <h4 className="article-section-name full">{article.section}</h4>
      <h2 className="article-title full">{article.title}</h2>
      <h3 className="article-byline ">{article.byline}</h3>
      <button className="read-more" onClick={() => {
        window.open(article.url)
      }}> Read More</button>
      </div>
      <img className="single-img" src={article.image[0].url} alt={article.image[0].caption} />
      <p className="article-abstract black">{article.abstract}</p>
      {article.subsection && <p>Subsection: {article.subsection}</p>}
      {article.published_date && <p>Published: {`${publishedDate.getMonth() + 1}/${publishedDate.getDate()}/${publishedDate.getFullYear()} `}</p>}
      {article.location.length >= 1 ? <p>Locations invloved: {article.location.join(', ')}</p> : '' }
      {article.people.length >= 1 ? <p>People invloved: {article.people.join(', ')}</p> : ''} 
      {article.organization >= 1 ? <p>Organization: {article.organization.join(', ')}</p> : ''}
    </div>
  )
}

export default SingleArticle