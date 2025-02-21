/// <reference types= "cypress"/>

beforeEach(()=>{
  cy.visit(Cypress.env('url'))

})

describe('Validating the APIs in the website App Demo', () => {
  it('mock the status code of a GET request', () => {
     cy.intercept(
      { 
        method: 'GET',
        url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'

     },
     { 
        statusCode:200,
        body:[{
          "book_name": "RestAssured with Java",
          "isbn": "LSA",
          "aisle": "2303"

        }]
      
     }).as('bookretrieval')

     cy.contains('button', ' Virtual Library ').click()
     cy.wait('@bookretrieval')
     cy.get('p').should('contain', 'Oops only 1 Book available')
  })
})