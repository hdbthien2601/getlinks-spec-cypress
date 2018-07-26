import Login from '../../pages/admin/Login'
import AgencyList from '../../pages/admin/agency/list'

describe('Test login page', () => {
    beforeEach(function () {
        Login.login()
        AgencyList.open()
    });

    it('Load create agency form', () => {
        AgencyList.openCreate()
        cy.url().should('contain', '/admin/agency/create')
    })

    it('Upload image', () => {
        AgencyList.openCreate()
        cy.url().should('contain', '/admin/agency/create')

        cy.upload_file('./404.png', 'input[type=file]')
    })
})