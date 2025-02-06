## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd automation-project
   ```

2. **Install dependencies**:
   ```
   npm install
   npx playwright install winldd 
   ```

3. **Run the tests**:
   ```
   npx playwright test --headed
   ```

## Project Details

- **Pages > loginPage.js**: Contains methods to interact with the login page, including entering the username and password, clicking the login button, and checking if the user is logged in. A simple Page Object Model is used in this framwork. This js file will help mentain the test script easily for any code change or updates on locators found in the login.test.js file
- **tests > login.test.js**: The entire test script is in this js file. You can edit the test steps from here.
- **Test Script**: Automates the login process 
-  navigating to the login page, entering  valid and invalid credentials, clicking the login button, and verifying that the dashboard is displayed for successfull login. 
