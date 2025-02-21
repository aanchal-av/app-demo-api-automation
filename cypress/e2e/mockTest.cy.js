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

  it('Integration test between UI and API', () => {
      
    cy.intercept({

      method: 'GET',
      url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'

    },
  {
    body:[{
      
        "book_name": "RestAssured with Java",
        "isbn": "LSA",
        "aisle": "2303"
    },
    {
        "book_name": "RestAssured with Java",
        "isbn": "DSR",
        "aisle": "2304"
    },
    {
        "book_name": "RestAssured with Java",
        "isbn": "RCD",
        "aisle": "2305"
    },
    {
        "book_name": "RestAssured with Java",
        "isbn": "TSD",
        "aisle": "2307"
    

    }]

  }).as('bookretrievals')
  
  cy.contains('button','Virtual Library').click()
  cy.wait('@bookretrievals').then((interception)=>{
    cy.get('tr').should('have.length',interception.response.body.length+1)
  })
  cy.get('h2').should('contain', 'Books Availability in Rahul Shetty Academy Library')


  })
})