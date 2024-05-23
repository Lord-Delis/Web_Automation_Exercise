/// <reference types= "cypress" />

class LandingLoginPage{
    getUsername(){
        return cy.get('[data-qa="login-email"]')
    }
    getPassword(){
        return cy.get('[data-qa="login-password"]')
    }
    getLogin(){
        return cy.get('[data-qa="login-button"]')
    }
    getLoginBtn(){
        return cy.get('.shop-menu > .nav > :nth-child(4) > a')
    }
    getLoginName(){
        return cy.get(':nth-child(10) > a')
    }
    getWomenDropdown(){
        return cy.get(':nth-child(1) > .panel-heading > .panel-title > a > .badge')
    }
    selectTops(){
        return cy.get('#Women > .panel-body > ul > :nth-child(2)')
    }
    selectGreenShirt(){
        return cy.get(':nth-child(10) > .product-image-wrapper > .single-products > .productinfo > .btn')
    }
    selectSummerWhiteTop(){
        return cy.get(':nth-child(8) > .product-image-wrapper > .single-products > .productinfo > .btn')
    }
    selectContinueShoppingBtn(){
        return cy.get('.modal-footer > .btn')
    }
    cartSuccess(){
        return cy.get('.modal-body > :nth-child(1)')
    }
    viewCartBtn(){
        return cy.get('u')
    }
    proceedToCheckoutBtn(){
        return cy.get('.col-sm-6 > .btn')
    }
    getCheckoutLbl(){
        return cy.get('.active')
    }
    getCommentField(){
        return cy.get('.form-control')
    }
    getPlaceOrderBtn(){
        return cy.get(':nth-child(7) > .btn')
    }
    getHeading(){
        return cy.get('.heading')
    }
    getNameOnCard(){
        return cy.get('[data-qa="name-on-card"]')
    }
    getCardNumber(){
        return cy.get('[data-qa="card-number"]')
    }
    getCvc(){
        return cy.get('[data-qa="cvc"]')
    }
    getExpiryMonth(){
        return cy.get('[data-qa="expiry-month"]')
    }
    getExpiryYear(){
        return cy.get('[data-qa="expiry-year"]')
    }
    getPayBtn(){
        return cy.get('[data-qa="pay-button"]')
    }
    getOrderPlacedLbl(){
        return cy.get('[data-qa="order-placed"] > b')
    }
    getConfirmatoryMessage(){
        return cy.get('.col-sm-9 > p')
    }
    getDownloadInvoiceBtn(){
        return cy.get('.col-sm-9 > .btn-default')
    }
    getContinueBtn(){
        return cy.get('[data-qa="continue-button"]')
    }
}
export default LandingLoginPage
