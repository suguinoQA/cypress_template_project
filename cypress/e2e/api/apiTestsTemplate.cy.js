describe('Test suite name', () => {
    beforeEach(() => {
        // arrange
    })
    it('TC01 - Get', () => {
        // act  
        cy.request('https://jsonplaceholder.typicode.com/posts')
            .should((response) => {
                // assert
                expect(response.status).to.eq(200)
            })
    })
    it('TC02 - Post', () => {
        // act  
        cy.request({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'POST',
            body: JSON.stringify({
                id: 1,
                title: 'foo',
                body: 'bar',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((response) => {
                // assert
                expect(response.status).to.eq(201)
                expect(response.body).to.have.property('body', 'bar')
            })
    })
    it('TC03 - Put', () => {
        // act  
        cy.request({
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            method: 'PUT',
            body: JSON.stringify({
                id: 1,
                title: 'foo',
                body: 'barEDIT',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((response) => {
                // assert
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('body', 'barEDIT')
            })
    })
    it('TC04 - Patch', () => {
        cy.request({
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            method: 'PATCH',
            body: JSON.stringify({
                title: 'fooEDIT',
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((response) => {
                // assert
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('title', 'fooEDIT')
            })
    })
    it('TC05 - Delete', () => {
        // act
        cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => {
                // assert
                expect(response.status).to.eq(200)
            })
    })
})