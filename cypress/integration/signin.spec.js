
describe('Sign in', () => {
    beforeEach(() => {
        // Calling signup_user.json content
        cy.fixture('signup_user').as('user')

        // Calling messags.json content
        cy.fixture('messages').as('messages')

        cy.visit('http://trainingqa.avantica.avanticatec.net:3000/signup')
    })
    
    it('cy.signup - An error message should be displayed when all data is filled except the imagen profile', function() {
                
        cy.get('#firstname').type(this.user.name)
        cy.get('#lastname').type(this.user.last_name)
        cy.get('#email').type(this.user.email)
        cy.get('#username').type(this.user.username)
        cy.get('#phone').type(this.user.phone)
        cy.get('#password').type(this.user.password)
        cy.get('#confirm').type(this.user.confirm_password)
        cy.get('.SignUp-bto').click()
        cy.get('.error-signup').should('be.visible').and('have.text', this.messages.error.required_photo_error_message)
    })
})