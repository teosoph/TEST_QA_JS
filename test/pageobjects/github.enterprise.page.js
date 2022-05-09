class EnterprisePage {
  // ============ the "Free Trial Registration" block ================
  // ==== Name ====
  // get the locator of the "Name" input field
  get nameInputFieldLocator() {
    return $("//input[@id='contact_request_name']");
  }
  // add value to the "Name" input field
  addDataToNameInputField(value) {
    this.nameInputFieldLocator.addValue(value);
  }

  // ==== Company ====
  // get the locator of the "Company" input field
  get companyInputFieldLocator() {
    return $("//input[@id='contact_request_organization_name']");
  }
  // add value to the "Company" input field
  addDataToCompanyInputField(value) {
    this.companyInputFieldLocator.addValue(value);
  }

  // ==== Email ====
  // get the locator of the "Email" input field
  get emailInputFieldLocator() {
    return $("//input[@id='contact_request_email']");
  }
  // add value to the "Email" input field
  addDataToEmailInputField(value) {
    this.emailInputFieldLocator.addValue(value);
  }

  // ==== Phone ====
  // get the locator of the "Phone" input field
  get phoneInputFieldLocator() {
    return $("//input[@id='contact_request_phone']");
  }
  // add value to the "Phone" input field
  addDataToPhoneInputField(value) {
    this.phoneInputFieldLocator.addValue(value);
  }

  // ==== Radio-buttons ====
  // get the locator of the "Not sure yet" radio-button in the "Choose Installation Type" radio-buttons
  get notSureYetRadioButtonLocator() {
    return $("//label[@for='contact_request_instance_type_not_sure']");
  }
  // click method on the "Not sure yet" radio-button in the "Choose Installation Type" radio-buttons
  clickOnNotSureYetRadioButton() {
    this.notSureYetRadioButtonLocator.click();
  }

  // ==== Questions ====
  // get the locator of the "Yes" radio-button in the "Questions" radio-buttons
  get yesRadioButtonLocator() {
    return $("//input[@id='questions_yes']");
  }
  // click method on the "Yes" radio-button in the "Questions" radio-buttons
  clickOnYesRadioButton() {
    this.yesRadioButtonLocator.click();
  }
  // get the locator of the "List the question" input field
  get textAreaQuestionInputFieldLocator() {
    return $("//textarea[@id='questions-list']");
  }
  // addValue method on the "List the question" input field
  addValueToTextAreaQuestionInputField(value) {
    this.textAreaQuestionInputFieldLocator.addValue(value);
  }

  // ==== Agreements ====
  // get the locator of the check-box in the "Agreements" block
  get agreeCheckBoxLocator() {
    return $("//input[@id='contact_request_agreed_to_terms']");
  }
  // click method on the check-box in the "Agreements" block
  clickOnAgreeCheckBox() {
    this.agreeCheckBoxLocator.click();
  }
}

module.exports = new EnterprisePage();
