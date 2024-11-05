/// <reference types="Cypress" />
import LoginPage from "../pages/login_page";

const loginPage = new LoginPage();

Given(/^eu acesse a página home da aplicação$/, () => {
  loginPage.acessHomePage(); // Usa a instância loginPage
});

When(/^eu inserir meu email "([^"]*)" e minha "([^"]*)"$/, (email, password) => {
  console.log(email, password);
  loginPage.acessLoginPage(); // Usa a instância loginPage

  loginPage.fillLoginInfo(email, password); // Usa a instância loginPage
});

When(/^clicar no botão entrar$/, () => {
  loginPage.submitLogin(); // Usa a instância loginPage
});

Then(/^tenho meu acesso "([^"]*)"$/, (message) => {
  console.log(message);
  cy.contains('Dashboard')
});
