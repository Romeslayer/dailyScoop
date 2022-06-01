export const cleanResponse = (response) => {
  const result = {};
  result.section = response.section;
  result.num_results = response.num_results;
  result.articles = response.results.map((article) => {
    return {
      section: article.secton,
      subsection: article.subsection,
      abstract: article.abstract,
      image: article.multimedia[0],
      published_date: article.published_date,
      url: article.url,
      title: article.title, 
    }
  })
}