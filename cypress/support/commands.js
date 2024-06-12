/// <reference types= "cypress" />
const path = require('path')
const data = require('../fixtures/data.json')

import LandingLoginPage from "../pageObjects/LandingLoginPage";
const landingLoginPage = new LandingLoginPage();

const info = data.addToCart_Checkout.loginInfo
const addToCartSuccess = data.addToCart_Checkout.addToCartSuccess
const comment = data.addToCart_Checkout.comment
const paymentHeading = data.cardDetails.paymentHeading
const nameOnCard = data.cardDetails.nameOnCard
const cardNumber = data.cardDetails.cardNumber
const cvc = data.cardDetails.cvc
const month = data.cardDetails.month
const year = data.cardDetails.year
const orderPlacedLbl = data.cardDetails.orderPlacedLbl
const OrderMessage = data.cardDetails.OrderMessage

Cypress.Commands.add('validLogin', (getUsername, getPassword) => {
    //login with valid cred
    landingLoginPage.getLoginBtn().click()
    landingLoginPage.getUsername().clear().type(getUsername)
    cy.wait(500)
    landingLoginPage.getPassword().clear().type(getPassword)
    landingLoginPage.getLogin().click()
    cy.contains(info)
})

Cypress.Commands.add('addToCart', () => {
    //selecting the specified shirt from the items
    landingLoginPage.getWomenDropdown().click()
    landingLoginPage.selectTops().click()
    landingLoginPage.selectGreenShirt().click()
    cy.wait(500)
    landingLoginPage.cartSuccess().should('have.text', addToCartSuccess)
    landingLoginPage.selectContinueShoppingBtn().click()
    landingLoginPage.selectSummerWhiteTop().click()
    cy.wait(500)
    landingLoginPage.cartSuccess().should('have.text', addToCartSuccess)
    cy.wait(1000)
})

Cypress.Commands.add('proceedToCheckout', () => {
    //viewing the cart, adding a comment, and proceeding to checkout
    landingLoginPage.viewCartBtn().click()
    cy.wait(500)
    landingLoginPage.proceedToCheckoutBtn().click()
    cy.wait(500)
    landingLoginPage.getCheckoutLbl().should('have.text', 'Checkout')
    cy.wait(500)
    landingLoginPage.getCommentField().type(comment)
    landingLoginPage.getPlaceOrderBtn().click()
    cy.wait(1000)
    landingLoginPage.getHeading().should('have.text', paymentHeading)
})

Cypress.Commands.add('completePayment', () => {
    //getting the card input fields and filling it
    landingLoginPage.getNameOnCard().type(nameOnCard)
    landingLoginPage.getCardNumber().type(cardNumber)
    landingLoginPage.getCvc().type(cvc)
    landingLoginPage.getExpiryMonth().type(month)
    landingLoginPage.getExpiryYear().type(year)
    landingLoginPage.getPayBtn().click()
    cy.wait(1000)

    //verifying that the order has been placed
    landingLoginPage.getOrderPlacedLbl().should('have.text', orderPlacedLbl)
    landingLoginPage.getConfirmatoryMessage().should('have.text', OrderMessage)
    landingLoginPage.getContinueBtn().click()
    cy.wait(500)
})

Cypress.Commands.add('SortAndPrintItems', () => {

    // confirm that the items are visible
    cy.get('.features_items').should('be.visible');
    cy.get('.features_items .col-sm-4').then(($products) => {
        const productItems = [];

        $products.each((index, product) => {
            const label = Cypress.$(product).find('.productinfo p').text();
            // get the product info name
            const productText = Cypress.$(product).find('.productinfo h2').text();
            // get the price numbers from price text
            const price = parseFloat(productText.replace(/^\D+/g, ''));

            productItems.push({ label, price });
        });

        // Sorting by price low to high
        productItems.sort((a, b) => a.price - b.price);

        // Printing the sorted items
        productItems.forEach(item => {
            cy.log(`Label: ${item.label}, Price: ${item.price}`);
            console.log(`Label: ${item.label}, Price: ${item.price}`);
        });
    });

})
