const Page = require('./page');

class AgentClaim extends Page {

  //Login Page
  get userName() { return $('#okta-signin-username'); }
  get password() { return $('#okta-signin-password'); }
  get signInBtn() { return $('#okta-signin-submit'); }

  //Get Incident Info
  get incidentquestion1Yes() { return $('#option1a1'); }
  get incidentquestion1No() { return $('#option1a2'); }
  get incidentquestion2Yes() { return $('#option2a1'); }
  get incidentquestion2No() { return $('#option2a2'); }
  get incidentquestion3Yes() { return $('#option3a1'); }
  get incidentquestion3No() { return $('#option3a2'); }
  get incidentquestion4Yes() { return $('#option4a1'); }
  get incidentquestion4No() { return $('#option4a2'); }
  get incidentInfoContinueBtn() { return $('#incidentInfoSubmit'); }

  //Search Customer's Device Protection Plan
  get searchMobileNumber() { return $('#searchIdentifierInput'); }
  get dateOfIncident() { return $('#dateOfIncident'); }
  get searchBtn() { return $('#searchEnrollmentBtn'); }
  get customerAuthenticateCheckBox() { return $('#customerCheckAuth'); }
  get startClaimBtn() { return $('#startClaimButton'); }

  //Initiate Claim
  get emailAddress() { return $('#customerEmailPreference'); }
  get initiateClaimContinueBtn() { return $('#initiateClaimBtn'); }

  //Claim Initiation Complete
  get startNewCallBtn() { return $('//a[text()="Start new Call"]'); }
  get exitAndLogOffBtn(){ return $('(//a[text()="Exit & Log Off"])[2]'); }


  constructor() {
    super();
    this.href = '';
    // this.href = '/t-mobile';
    // /assurant/index.aspx
  }

  trait() {
    super.trait(this.href);
  }

  navigate() {
    super.navigate(this.href);
    this.trait();
  }

  login(username) {
    this.navigate();
    const users = browser.options.users[username];
    const { browserName } = browser.desiredCapabilities;
    super.user = users[browserName];
    this.userName.setValue(this.user.userName);
    browser.pause(3000);
    this.password.setValue(this.user.password);
    this.signInBtn.click();
    browser.pause(4000);
  }

  getIncidentInfo() {
    browser.pause(9000);
    // browser.execute('window.scrollTo(0, document.body.scrollHeight)');
    this.incidentquestion1No.waitForValue();
    // this.incidentquestion1No.click();
    const element = $("#option1a2");
    browser.execute("arguments[0].click();", element.value);
    browser.pause(3000);
    const element1 = $("#option2a1");
    browser.execute("arguments[0].click();", element1.value);
    // this.incidentquestion2Yes.click();
    this.incidentInfoContinueBtn.waitForVisible();
    this.incidentInfoContinueBtn.click();
  }

  customerDeviceProtectionPlan() {
    const users = browser.options.users['CustomerDeviceProtectionPlan'];
    const { browserName } = browser.desiredCapabilities;
    super.user = users[browserName];
    this.searchMobileNumber.waitForVisible();
    this.searchMobileNumber.setValue(this.user.searchMobileNumber);
    this.dateOfIncident.setValue(this.user.dateOfIncident);
    this.searchBtn.click();
    browser.pause(5000);
    browser.execute('window.scrollTo(0, document.body.scrollHeight)');
    this.customerAuthenticateCheckBox.waitForVisible();
    this.customerAuthenticateCheckBox.click();
    this.startClaimBtn.click();
    browser.pause(3000);
  }

  initiateClaim() {
    const users = browser.options.users['InitiateClaim'];
    const { browserName } = browser.desiredCapabilities;
    super.user = users[browserName];
    this.emailAddress.waitForVisible();
    this.emailAddress.setValue(this.user.emailAddress);
    this.initiateClaimContinueBtn.waitForVisible();
    this.initiateClaimContinueBtn.click();
    browser.pause(3000);
  }

  claimInitiationComplete(){
    this.startNewCallBtn.waitForVisible();
    this.startNewCallBtn.click();
    browser.pause(3000);
    // this.incidentquestion1No.waitForVisible();
    // browser.pause(2000);
  }

  claimInitiationCompleteExitLogOff(){
    this.exitAndLogOffBtn.waitForVisible();
    this.exitAndLogOffBtn.click();
    browser.pause(3000);
    this.userName.waitForVisible();
    browser.pause(2000);
  }

}

export default new AgentClaim();
