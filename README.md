# Playwright Automation Project

This project is created to automate web application testing using **Playwright**.

## What this project does
- Runs automated browser tests  
- Validates UI functionality  
- Supports multiple browsers  
- Generates test reports  

## Prerequisites
- Node.js installed  
- npm installed  
 
## Project Setup
1. Download the project  
2. Open terminal in the project folder  
3. Run the following command:
   ```bash
   npm install
   ```

## Running Tests
- Run all tests:
  ```bash
  npx playwright test
  ```

- Run tests with UI:
  ```bash
  npx playwright test --ui
  ```

- Run tests in headed mode:
  ```bash
  npx playwright test --headed
  ```

## Test Reports
After test execution, open the HTML report using:
```bash
npx playwright show-report
```

## Project Structure
```
tests/                 → Test files
pages/                 → Page Object files
playwright.config.ts   → Playwright configuration
```

## Notes
- Keep tests small and readable  
- Reuse page objects  
- Update configuration when browser or environment changes  

## Author
Dhileepa Karthikeyan

