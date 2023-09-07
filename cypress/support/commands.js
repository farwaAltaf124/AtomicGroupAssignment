// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************


// This is the reusable command to navigate to website 
Cypress.Commands.add('navigateToABNWebsite', (url) => {
    cy.visit(url)

})

// This is the command to search for ABN and click search button  
Cypress.Commands.add('EnterABN', (ABNvalue) => {
    cy.get('#SearchText').type(ABNvalue.abn)
    

})
//reusable code for search button
Cypress.Commands.add('Searchbutton', (search)=>{
    cy.get('input[type=submit]').click()
})

//code for verifying text on screen
Cypress.Commands.add('ABNEntryLookup', (ABN) => {
    cy.get('#content-matching').contains(ABN.abnentry).should('exist')
    

}
)
Cypress.Commands.add('VerifyStatus', (Status) => {
    cy.get('#content-matching').contains(Status).should('exist')

}
)
Cypress.Commands.add('VerifyName', (Name) => {
cy.get('#content-matching').should('contain', Name.detail);
}
)











