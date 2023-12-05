Feature: login
    @Test
    Scenario Outline: Login as an admin with correct username and password
        Given as an admin I navigate to orangeHRM
        When as an admin I enter the correct username "<username>"
        And as an admin I enter the correct password "<password>"
        Then as an admin I can login successfully
        Examples:
            | username | password |
            | Admin    | admin123 |
