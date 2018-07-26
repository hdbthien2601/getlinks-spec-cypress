import { adminHost } from '../../../config'
const open = () => { cy.get(':nth-child(2) > .nav-link').click() }
const openCreate = () => { cy.get('.add-btn').click() }
export default {
    open,
    openCreate
}