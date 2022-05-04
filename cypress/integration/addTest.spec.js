describe('Add New Item Test', () => {

    it('Visit Add Page', () => {
        cy.visit('/add')
    })

    it('Fill Name Area With Null Values', () => {
        cy.get('.form-control').eq(0).type(' ')
    })

    it('Fill Url Area With Null Values', () => {
        cy.get('.form-control').eq(1).type(' ')
    })

    it('Click Add Button With Null Values', () => {
        cy.get('.AddView button').click()
    })
    
    it('Wait Two Seconds', () => {
        cy.wait(2000)
    })

    it('Fill Name Area', () => {
        cy.get('.form-control').eq(0).type('stackoverflow')
    })

    it('Fill Url Area', () => {
        cy.get('.form-control').eq(1).type('https://stackoverflow.com/')
    })

    it('Click Add Button', () => {
        cy.get('.AddView button').click()
    })

})
