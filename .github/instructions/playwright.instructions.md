# Copilot Instructions for playwright-test

## Code Quality Standards

- **Locators**: Prioritize user-facing, role-based locators (`getByRole`, `getByLabel`, `getByText`, etc.) for resilience and accessibility. Use `test.step()` to group interactions and improve test readability and reporting.
- **Assertions**: Use auto-retrying web-first assertions. These assertions start with the `await` keyword (e.g., `await expect(locator).toHaveText()`). Avoid `expect(locator).toBeVisible()` unless specifically testing for visibility changes.
- **Timeouts**: Rely on Playwright's built-in auto-waiting mechanisms. Avoid hard-coded waits or increased default timeouts.
- **Clarity**: Use descriptive test and step titles that clearly state the intent. Add comments only to explain complex logic or non-obvious interactions.

## Project Overview

- This is a Playwright-based end-to-end automation test suite for a multi-service e-commerce platform.
- Major service boundaries: admin, vendor, customer, and integrations, each with distinct dashboard and API endpoints (see `utils/apiEndPoints.ts`).
- Environment configuration is managed via `.env` (see `.env.example`).
- Test data and configuration are separated into files like `testData.json` and `env.ts`.
- **Cucumber BDD support:** Feature files for Cucumber are located in the `features/` directory.

## Key Workflows

- **Install dependencies:** `npm install`
- **Install Playwright browsers:** `npx playwright install` (or `npx playwright install --with-deps chromium`)
- **Configure environment:** Copy `.env.example` to `.env` and update values.
- **Run all tests:** `npm run test:all`
- **Run Cucumber tests:** (If configured) use the appropriate npm script, e.g., `npm run test:cucumber`
- **View Allure report:** Generated in `allure-report/` after test runs.

## Project Structure & Patterns

- **Test specs:** Top-level files like `test-1.spec.ts` and folders like `tests/`, `tests-examples/`, and `features/` (for Cucumber `.feature` files).
- **API endpoints:** Centralized in `utils/apiEndPoints.ts` as a large object, with dynamic URL builders for parameterized endpoints.
- **Test data:** Use `testData.json` for static data; environment variables for secrets/URLs.
- **Feature coverage:** The feature map in `feature-map/e2e-feature-map.yml` defines all major user and admin journeys, with boolean flags for coverage. Use this file to track, plan, and extend test coverage. Each feature is mapped to a page and user role (admin, vendor, customer).
- **Results:** Test results and reports are output to `allure-results/`, `allure-report/`, and `test-results/`.
- **Utilities:** Shared helpers and config in `utils/`.

## Conventions & Integration Points

- **Endpoints:** Always use the exported `endPoints` object for API calls; do not hardcode URLs.
- **Environment:** Use the `env` helper for environment variable access.
- **Test isolation:** Each test should set up its own data and avoid cross-test dependencies.
- **Feature-driven:** New or updated tests should reference the feature map and update coverage flags as appropriate. This ensures traceability between specs and business requirements.
- **External services:** Integrates with Allure for reporting; see `allure-report/`.
- **Custom workflows:** Some endpoints are functions (e.g., `editBrand(brandID)`), use them for dynamic API calls.
- **Cucumber integration:** Place `.feature` files in `features/` and step definitions in the appropriate location (commonly `features/steps/` or similar).

## Examples

- To get all brands: `endPoints.getAllBrands`
- To edit a brand: `endPoints.editBrand(brandID)`
- To get customer login page: `endPoints.customerLoginPage`
- To check if a feature is covered: see `feature-map/e2e-feature-map.yml` under the relevant page/role/feature.
- To add a new Cucumber scenario: create a `.feature` file in `features/` and implement step definitions.

## Quality Checklist

Before finalizing tests, ensure:

- [ ] All locators are accessible and specific and avoid strict mode violations
- [ ] Tests are grouped logically and follow a clear structure
- [ ] Assertions are meaningful and reflect user expectations
- [ ] Tests follow consistent naming conventions
- [ ] Code is properly formatted and commented

## References

- See `README.md` for setup and test run instructions.
- See `utils/apiEndPoints.ts` for all API endpoint patterns and usage.
- See `feature-map/e2e-feature-map.yml` for the full feature coverage matrix and to plan new tests.
- See `features/` for Cucumber BDD scenarios.

---

If you are unsure about a workflow or endpoint, check the referenced files or ask for clarification.# Copilot Instructions for playwright-test
