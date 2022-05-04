describe('Home View Tests', () => {

  it('Submit Card Header Check', () => {
    cy.visit('/')
    cy.contains('.submitText', 'SUBMIT A LINK')
  })

  it('Pagination Card Check', () => {
    cy.contains('.orderDropdown .header span', 'Order By')
  })

  it('Visit Add Page', () => {
    cy.contains('.submitText', 'SUBMIT A LINK').click()
  })

  it('Add Page Header Text', () => {
    cy.contains('.AddView h1', 'Add New Link')
  })

  it('Add Page Input Check', () => {
    cy.get('.form-control')
  })

  it('Add Page Button Check', () => {
    cy.contains('.AddView button', 'ADD')
  })

})
