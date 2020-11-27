
describe('Log in', () => {
    beforeEach(() => {
        // Calling signup_user.json content
        cy.fixture('messages').as('messages')
        
        // Calling valid_user.json content
        cy.fixture('valid_user').as('user')

        cy.visit('http://trainingqa.avantica.avanticatec.net:3000/login')
    })
    
    it('cy.login - An error message should be displayed after try to log in with incorrect user/password', () => {
        const email = 'jean.carlo.rodriguez@avantica.com'
        const password = 'control123456#M'

        cy.login(email, password)
        cy.get('@messages').then(messages => cy.get('#error-message').should('be.visible').and('have.text', messages.error.invalid_error_message))
    })

    it.only('cy.login - Verify that its possible to log in with a valid user', () => {
        cy.get('@user').then(user => {
            cy.get('#email').type(user.email)
            cy.get('#password').type(user.password)
            cy.get('.Login-bto').click()
            cy.get('.navbar-imagen').should('be.visible')
        })
    })
})