/// <reference types="Cypress" />
import RegisterPage from "../pages/register_page";

const registerPage = new RegisterPage


Given(/^que estamos na page de Cadastro$/, () => {
  registerPage.visitPage()
});

Given(/^inserimos nosso Nome "([^"]*)" e Sobrenome "([^"]*)"$/, (name, surname) => {
  registerPage.fillNameAndSurname(name, surname)

});

Given(/^informamos nossos dados de contato "([^"]*)", "([^"]*)" e "([^"]*)"$/, (adress, email, phone) => {
  registerPage.fillContacts(adress, email, phone)

});

Given(/^nosso genero como "([^"]*)" e hobbies "([^"]*)"$/, (gender, hobbies) => {
  registerPage.selectRadioGender(gender)
  registerPage.selectCheckHobbies(hobbies)

});

Given(/^nossas skill "([^"]*)" e nosso pais "([^"]*)"$/, (skill, country) => {
  registerPage.selectSkills(skill)
  registerPage.selectCountry(country)

});

When(/^eu digitar meu nascimento "([^"]*)" , "([^"]*)" e "([^"]*)"$/, (year, month, day) => {
  registerPage.selectBirthDay(year, month, day)

});

When(/^inserir minhas senhas "([^"]*)" e "([^"]*)"$/, (pass, confirmPass) => {
  registerPage.inputPasswords(pass, confirmPass)
  registerPage.selectImage()

});

When(/^clico no botão cadastrar$/, () => {
  registerPage.btnSubmit()

});

Then(/^tenho meu cadastro realizado com sucesso$/, () => {

});
