/// <reference types= "cypress" />
const data=require('../fixtures/data.json')
const username = data.valid_Username_Password.username
const password = data.valid_Username_Password.password

describe( "Adding to cart and checkout",
    {
        viewportWidth: 1536,
        viewportHeight: 960
    },
    function() {
        before('Intialize Test Data', function(){

        })
        beforeEach(()=>{
          cy.visit('/')
        })
        
      it('Adding Order to cart and checkout', function(){
          cy.validLogin(username,password)
          cy.addToCart()
          cy.proceedToCheckout()
          cy.completePayment()
      })
    })