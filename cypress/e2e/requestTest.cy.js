/// <reference types="cypress"/>

beforeEach(()=>{
    cy.visit(Cypress.env('url'))
  
  })
  
  describe('Validating the APIs in the website App Demo', () => {
    it('API calls without cypress', () => {
     
        cy.request({
            method: "POST",
            url: "http://216.10.245.166/Library/Addbook.php",
            body:{
                "name":"Learn Appium Automation with Java",
                "isbn":"bcud",
                "aisle":"235347",
                "author":"John foe"
            }
        }).then(function(response){
            expect(response.body).to.have.property("Msg","successfully added")
            expect(response.status).to.equal(200)
        })



    })



})