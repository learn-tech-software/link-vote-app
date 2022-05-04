describe('List Tests', () => {

    it('Add Dummy Data', () => {
        cy.visit('/add')
        cy.get('.form-control').eq(0).type('stackoverflow')
        cy.get('.form-control').eq(1).type('https://stackoverflow.com/')
        cy.get('.AddView button').click()
        cy.wait(1000)
    })

    it('Visit Home Page', () => {
        cy.visit('/')
    })

    it('Check List Card', () => {
        cy.get('.listCard')
    })

    it('Check List Card Props', () => {
        cy.contains('.listTitle', 'stackoverflow').eq(0)
        cy.contains('.listLink', 'https://stackoverflow.com/').eq(0)
        cy.contains('.listCountBold', '0').eq(0)
    })

    it('Check Up Vote Operation', () => {
        cy.get('.incrementVoteCount').click()
    })

    it('Check Down Vote Operation', () => {
        cy.get('.decrementVoteCount').click()
    })

})
