
describe('The Daily Scoop Homepage', () => {

  beforeEach(() => {
    cy.intercept('https://api.nytimes.com/svc/topstories/v2/**', { fixture: 'response'}).as('Sample Response')
    cy.visit('http://localhost:3000')
  })

  it('should load the page with the title and buttons to navigate', () => {

  })
})
