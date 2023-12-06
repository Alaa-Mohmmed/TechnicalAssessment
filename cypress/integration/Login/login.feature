Feature: Login
    @testing
    Scenario Outline: Login as an admin with correct username and password
        Given as an admin I navigate to orangeHRM "<pageName>"
        When as an admin I enter the correct username "<username>"
        And as an admin I enter the correct password "<password>"
        Then as an admin I can login successfully
        Examples:
            | username | password | pageName  |
            | Admin    | admin123 | loginPage |
