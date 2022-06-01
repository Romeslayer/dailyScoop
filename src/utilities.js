export const cleanResponse = (response) => {
  const result = {};
  result.section = response.section;
  result.num_results = response.num_results;
  result.copyright = response.copyright;
  result.articles = response.results.map((article) => {
    return {
      section: article.section,
      byline: article.byline,
      subsection: article.subsection,
      abstract: article.abstract,
      image: article.multimedia[0],
      published_date: article.published_date,
      url: article.url,
      title: article.title,
      location: article.geo_facet,
      people: article.per_facet,
      organization: article.org_facet
    }
  })

  return result;
}