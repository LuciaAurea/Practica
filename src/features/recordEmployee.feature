Feature: Login to the application

  Scenario: Successful login
    Given I open the login page
    When I enter username <user> and password <password>
    And I click the login button
    And I should see the dashboard
    Then I click the Add button
    Then I record employee data <firstName>, <middleName>, <lastName>, <email>, <contactNumber>, <keywords>, <addNotes>, <dateApplication>
    Then I check the result with <message>

    Examples:
      | user    | password   | firstName | middleName | lastName | email               | contactNumber  | keywords         | addNotes       | dateApplication | message        |
      | "Admin" | "admin123" | "Jane"    | "Doe"      | "Doe"    | "janedoe@gmail.com" | "+51935186977" | "CSS,Playwright" | "New knowloge" | "04-09-2024"    | "Jane Doe Doe" |