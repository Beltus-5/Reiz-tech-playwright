## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd automation-project
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the tests**:
   ```
   npx playwright test --headed
   ```

## Project Details

- **LoginPage Class**: Contains methods to interact with the login page, including entering the username and password, clicking the login button, and checking if the user is logged in.
  
- **DashboardPage Class**: Contains methods to verify the visibility of the dashboard after a successful login.

- **Test Script**: Automates the login process by navigating to the login page, entering credentials, clicking the login button, and verifying that the dashboard is displayed.
