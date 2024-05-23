/// <reference types= "cypress" />
const data = require('../fixtures/data.json')
const username = data.valid_Username_Password.username
const password = data.valid_Username_Password.password

describe( "Login Module",
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
        
      it('Login with valid username and password', function(){
          cy.validLogin(username,password)
      })
    })