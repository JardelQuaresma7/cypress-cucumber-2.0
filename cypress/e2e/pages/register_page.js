/// <reference types="Cypress" />
import RegisterElements from "../elements/register_elements"

const registerElements = new RegisterElements

const url = 'https://demo.automationtesting.in/Register.html'

class RegisterPage {

  visitPage() {
    cy.visit(url)
  }

  fillNameAndSurname(name, surname) {
    cy.get(registerElements.inputFirstName()).type(name)
    cy.get(registerElements.inputLastName()).type(surname)
  }

  fillContacts(adress, email, phone) {
    cy.get(registerElements.inputAdress()).type(adress)
    cy.get(registerElements.inputAdressEmail()).type(email)
    cy.get(registerElements.inputPhoneNumber()).type(phone)
  }

  selectRadioGender(gender) {
    cy.get(registerElements.checkRadioGender()).check(gender)
  }

  selectCheckHobbies(hobbies) {
    cy.get(registerElements.checkHobbies()).check(hobbies)
  }

  selectLanguages() {

  }

  selectSkills(skill) {
    cy.get(registerElements.inputSkills()).select(skill)
  }

  selectCountry(country) {
    cy.get(registerElements.selectCountry()).select(country, { force: true })
  }

  selectBirthDay(year, month, day) {
    cy.get(registerElements.selectYear()).select(year)
    cy.get(registerElements.selectMonth()).select(month)
    cy.get(registerElements.selectDay()).select(day)
  }

  inputPasswords(pass, confirmPass) {
    cy.get(registerElements.inputPass()).type(pass)
    cy.get(registerElements.inputConfirmPass()).type(confirmPass)
  }

  selectImage() {
    cy.get(registerElements.selectFile()).selectFile('cypress/downloads/quando-automatizar.png')
  }

  btnSubmit() {
    cy.get(registerElements.submitRegister).click()
  }



} export default RegisterPage