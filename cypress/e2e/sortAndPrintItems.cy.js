/// <reference types= "cypress" />
const data=require('../fixtures/data.json')
const username = data.valid_Username_Password.username
const password = data.valid_Username_Password.password

describe( "sorting items",
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
        
      it('Sorting out and printing out items per their price', function(){
          cy.validLogin(username,password)
          cy.SortAndPrintItems()
        })
    })