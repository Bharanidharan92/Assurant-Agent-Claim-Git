const page = require('../../src/pages/agentClaim.page');

const { Given, When, Then } = require('cucumber');

Given('I have logged in as {string}', (userGroup) => {
  page.login(userGroup.replace(/"/g, ''));
});

When('Get Incident Information section details', () => {
  page.getIncidentInfo();
});

When('Search the Customer Device Protection Plan section details', () => {
  page.customerDeviceProtectionPlan();
});

Then('Initiate the Claim section by using Customer contact Email', () => {
  page.initiateClaim();
});

Then('Claim Initiation Completed and Start the New Call', () => {
  page.claimInitiationComplete();
});

Then('Claim Initiation Completed and Exit & Log Off', () => {
  page.claimInitiationCompleteExitLogOff();
});
