describe('Registration Kasir Aja', () => {
    it('post Regis User Kasir Aja - POST', () => {
        let body = {
            "name": Cypress.env('username'),
            "email": "sanber123@mail.com",
            "password": "sanber123@"}
        //create post req
        cy.request('POST','/registration', body).as('userRegistration');

        //Assert hasil
        cy.get('@userRegistration').then(userRegistration => {
            expect(userRegistration.status).to.equal(201)
        })
    })
})