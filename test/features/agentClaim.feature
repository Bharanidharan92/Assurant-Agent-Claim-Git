Feature: Agent Claims

  Scenario: Agent claim - Exit & Log Off
    Given I have logged in as "UserGroup"
    When Get Incident Information section details
    When Search the Customer Device Protection Plan section details
    Then Initiate the Claim section by using Customer contact Email
    Then Claim Initiation Completed and Exit & Log Off

  Scenario: Agent claim - Start New Call
    Given I have logged in as "UserGroup"
    When Get Incident Information section details
    When Search the Customer Device Protection Plan section details
    Then Initiate the Claim section by using Customer contact Email
    Then Claim Initiation Completed and Start the New Call