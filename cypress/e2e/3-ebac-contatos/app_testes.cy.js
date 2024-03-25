/// <reference types="cypress" />

describe('Contact Management in Contacts Application', () => {
    
    const appUrl = 'https://agenda-contatos-react.vercel.app/';
    const nameInputSelector = '[data-testid="contact-name-input"]';
    const emailInputSelector = '[data-testid="contact-email-input"]';
    const phoneInputSelector = '[data-testid="contact-phone-input"]';
    const addButtonSelector = '[data-testid="add-contact-button"]';
    const firstEditButtonSelector = '[data-testid="edit-first-contact-button"]';
    const lastDeleteButtonSelector = '[data-testid="delete-last-contact-button"]';
    const saveChangesButtonSelector = '[data-testid="save-changes-button"]';

    beforeEach(() => {
        cy.visit(appUrl);
    });

    it('should verify that the application initializes correctly', () => {
        cy.get('header > h1').should('exist');
        cy.get(nameInputSelector).should('exist');
        cy.get(emailInputSelector).should('exist');
        cy.get(phoneInputSelector).should('exist');
    });

    it('should allow adding a new contact', () => {
        cy.get(nameInputSelector).type('Lucas Ribeiro');
        cy.get(emailInputSelector).type('lucasribeiro@gmai.com');
        cy.get(phoneInputSelector).type('1=21 966896978');
        cy.get(addButtonSelector).click();
        // Verificar se o contato foi adicionado, se necessário
    });

    it('should enter edit mode for a contact', () => {
        cy.get(firstEditButtonSelector).click();
        cy.get(nameInputSelector).should('have.value', 'Lucas Ribeiro');
        // Verifica se os outros campos estão preenchidos corretamente, se necessário
    });

    it('should edit the first contact', () => {
        cy.get(firstEditButtonSelector).click();
        cy.get(nameInputSelector).clear().type('Isabela france');
        cy.get(emailInputSelector).clear().type('isabe@gmi.com');
        cy.get(phoneInputSelector).clear().type('21 987585 89585');
        cy.get(saveChangesButtonSelector).click();
        // Verificar se o contato foi atualizado, se necessário
    });

    it('should delete the last contact', () => {
        cy.get(lastDeleteButtonSelector).click();
        // Verificar se o contato foi removido, se necessário
    });
});
