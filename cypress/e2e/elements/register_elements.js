class RegisterElements {

  inputFirstName = () => { return '[placeholder="First Name"]' }
  inputLastName = () => { return '[placeholder="Last Name"]' }
  inputAdress = () => { return '[ng-model="Adress"]' }
  inputAdressEmail = () => { return '#eid' }
  inputPhoneNumber = () => { return '[ng-model="Phone"]' }
  selectFile = () => { return '#imagesrc' }
  checkRadioGender = () => { return '[type="radio"]' }
  checkHobbies = () => { return '[type="checkbox"]' }
  inputLanguages = () => { return '#msdd' }
  inputSkills = () => { return '#Skills' }
  selectCountry = () => { return '#country' }
  selectYear = () => { return '#yearbox' }
  selectMonth = () => { return '[placeholder="Month"]' }
  selectDay = () => { return '#daybox' }
  inputPass = () => { return '#firstpassword' }
  inputConfirmPass = () => { return '#secondpassword' }
  submitRegister = () => { return '#submitbtn' }

} export default RegisterElements;