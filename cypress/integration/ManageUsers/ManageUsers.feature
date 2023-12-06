Feature: Manage users


    @testing
    Scenario Outline: Navigate to admin tab
        Given as an admin I navigate to orangeHRM "<pageName>" and login with "<username>" and "<password>"
        When as an admin I click on admin tab on the left side menu
        Then as an admin I can see the system users with title "<pageTitle>"

        Examples:
            | username | password | pageName  | pageTitle    |
            | Admin    | admin123 | loginPage | System Users |


    @testing
    Scenario Outline: Get number of records on the admin users dashboard
        Given as an admin I navigate to orangeHRM "<pageName>" and login with "<username>" and "<password>"
        When as an admin I navigate to system users page "<pageName2>"
        Then as an admin I can see number of existing users
        Examples:
            | username | password | pageName  | pageName2   |
             | Admin    | admin123 | loginPage| adminPanel |

    @testing
    Scenario Outline: Get number of records on the admin users dashboard
        Given as an admin I navigate to orangeHRM "<pageName>" and login with "<username1>" and "<password1>"
        When as an admin I navigate to system users page "<pageName2>"
        And as an admin I can click on add new user button
        Then as an admin I can fill user data "<userRole>", "<empName>", "<status>", "<username>", "<password>" and "<confirmPassword>"
        And as an admin I can click save button
        And as an admin I can clear recently added user by "<username>"

        Examples:
            | username1 | password1 | pageName  | pageName2  | userRole | empName        | status  | username       | password | confirmPassword |
            | Admin     | admin123  | loginPage | adminPanel | Admin    | Paul  Collings | Enabled | testingprofile | Aa111111 | Aa111111        |


    @testing
    Scenario Outline: verify records increased by one
        Given as an admin I navigate to orangeHRM "<pageName>" and login with "<username1>" and "<password1>"
        When as an admin I navigate to system users page "<pageName2>"
        Then as an admin I can add new user with "<username>" and "<password>" api
        And as an admin I can check that records increased by one
        And as an admin I can clear recently added user by "<username>"

        Examples:
            | username1 | password1 | pageName  | pageName2  | username       | password |
            | Admin     | admin123  | loginPage | adminPanel | testingprofile | Aa111111 |

    # @testing
    Scenario Outline: search for user
        Given as an admin I navigate to orangeHRM "<pageName>" and login with "<username1>" and "<password1>"
        When as an admin I navigate to system users page "<pageName2>"
        Then as an admin I can add new user with "<username>" and "<password>" api
        Then as an admin I can search for newly added user by username "<username>"
        And as an admin I can clear recently added user by "<username>"

        Examples:
            | username1 | password1 | pageName  | pageName2  | username       | password |
            | Admin     | admin123  | loginPage | adminPanel | testingprofile | Aa111111 |