describe('CurrencySPA', () => {

    beforeEach(() => {
        cy.server();
        cy.route('GET', '/api/rates', 'fixture:rates.json');         

        cy.visit('localhost:3000');
    })

    it('Loads Daily Rates', () => {
        cy.get('#app > h1').should('have.text', 'Currency Rates');
        cy.get('.loading').should('not.be.visible');
        cy.get('tbody>tr').eq(0).should('contain', 'EUR');
        cy.get('tbody>tr').eq(1).should('contain', '1.12805');
        cy.percySnapshot();
    });

    it('Convert Currency', () => {
        cy.route('POST', '/api/convert', {
            "rate": 10244.442
        });
        cy.get('.menu > a:nth-child(3)').click(); // Click Exchange Rates Menu
        cy.get('#app > h1').should('have.text', 'Exchange Rate');
        cy.get('.loading').should('not.be.visible');
        cy.get('#from').select('BTC');
        cy.get('#to').select('USD');
        cy.get('#amount').type('1');
        cy.get('.submit').click();
        cy.get('#result').should('have.text', 'USD 10244.442');
        cy.percySnapshot();
    });

    it('Loads Historical Rates', () => {
        cy.get('.menu > a:nth-child(4)').click(); // Click Historicals Rates Menu
        cy.get('#app > h1').should('have.text', 'Historical Rates');
        cy.get('#date')
            .type('2019-07-02') // There's a bug in calendar component that subtracts a day when you type in a date
            .blur();
        cy.get('.submit').click();
        cy.get('table').should('be.visible');
        cy.percySnapshot();
    });
});
