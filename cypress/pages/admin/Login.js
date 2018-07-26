import { adminHost } from '../../config'
const open = () => { cy.visit(adminHost + '/admin/login') }
const setEmail = (email) => { cy.get('#email').type(email) }
const setPassword = (pass) => { cy.get('#password').type(pass) }
const submit = () => { cy.get('.btn').click() }
export default {
    open,
    setEmail,
    setPassword,
    submit,

    login: () => {
        open()
        setEmail('quan.vo@getlinks.co')
        setPassword('123123123')
        submit()
    }
}