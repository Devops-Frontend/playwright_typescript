## Enterprise Test Automation Framework for AUT( Salesforce)

## 1.Over View

Enterprise Test Automation Framework is designed to provide arobust scalable and feature rich of automated testing of saleforce application. The framework encompasses various features such as logging, data driven testing, retry mechanism, self healing, cross browser testing, multiple environments, password encryption, code quality, CI/CD integration, reusable utilities, data generation, parallel testing, api mocking/testing

## 2.Features

### 2.1 Page Object Model Implementation

## Object: Apply POM principle to structure the code and to make reusable and maintainable code.

### 2.2 Data Driven Testing

## Object: Enhance test coverage by parameterizing tests with external data.

### 2.3 Logging

## Objective : Provide comphrehensive logs for detailed analysis.

### 2.4 Retry Mechanism

## Objective: Handle intermittant failures gracefully with automatic reties.

### 2.5 Self Healing

## Objective: Adaptive to dynamic changes in the salesforce application to minimize maintenance efforts.

### 2.6 Cross Browser testing

## Objective: Validate application functionality across different browsers

### 2.7 Multiple Environments

## Objective ; Support testing in various environments(Ex: Sandbox, developer edition, production)

### 2.8 Password Encryption

## Objective: Securely manage and use passwords in test scenarios

### 2.9 Code quality

## Objective : Enforce coding standards and maintain high quality code

### 2.10 CI/CD Integration

## Objective : Seamlessly integrate the framework with CI/CD Pipeline.

### 2.11 Reusable Utilities

## Objective : Develop modular and reusable utilities to optimize code maintenance.

### 2.12 Data Generation

## Objective : Generate test data dynamically to ensure diverse test scenarios.

## 2.13 Parallel Testing

### Objective : Execute test concurrently for faster feedback and optimized test suite execution.

## 2.14 API Mocking/Testing

### Objective : Mock and test salesforce APIs to validate backend functionality.

## 3. Test Scenarios:

### 3.1 Page Object Model Class and basic test.

## Scenario : Verify Page class for login page and create basic test.

## Steps:

### 1. Create POM class for login page.

### 2. Create tests using page class and its methods to login

### a. Login to Salesforce app

### b. Verify the success of login

## 3.2 Data Driven Testing

### Scenario : Verify creation of salesforce records using different sets of data.

### Steps:

### a. Retrieve Test data from an excel source.

### b. For each set of data.
