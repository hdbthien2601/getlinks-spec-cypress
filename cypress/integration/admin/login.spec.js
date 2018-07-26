import Login from '../../pages/admin/Login'

describe('Test login page', () => {
    it('Login success', () => {
        Login.open()
        cy.url().should('include', '/admin/login')

        Login.setEmail('quan.vo@getlinks.co')
        Login.setPassword('123123123')
        Login.submit()

        cy.get('h1').should('contain', 'Admin landing page')
    })

    it('Login fail', () => {
      Login.open()
      cy.url().should('include', '/admin/login')

      Login.setEmail('quan.vo@getlinks.co')
      Login.setPassword('wrong_pass')
      Login.submit()

      cy.get('.Toastify__toast-body').should('contain', 'Invalid')
  })
})