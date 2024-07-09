describe('Login with Email', () => {
  // it('Login with Valid email and password', () => {
  //   cy.visit('https://dev-app.hermetic.ai/')
  //   cy.get('.w-full.mt-2 > .w-full').click();
  //   cy.get('.align-center > .input-box').type('gayathrivs1991@gmail.com')
  //   cy.get(':nth-child(3) > .input-box').type('Sajith!0708')
  //   cy.contains('button', 'Continue')
  //     .should('be.visible')
  //     .click();
  // })

it('Login API', () => {
  cy.request('https://dev-capi.hermetic.ai/').then((response) => {
    //expect(response.status).to.eq(success);
    expect(response.body.status).to.eq(200);
    return response.body.message;
  })
})
})
