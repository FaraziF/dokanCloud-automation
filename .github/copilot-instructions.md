# Copilot Instructions for playwright-test

## Project Overview
- This is a Playwright-based end-to-end automation test suite for a multi-service e-commerce platform.
- Major service boundaries: admin, vendor, customer, and integrations, each with distinct dashboard and API endpoints (see `utils/apiEndPoints.ts`).
- Environment configuration is managed via `.env` (see `.env.example`).
- Test data and configuration are separated into files like `testData.json` and `env.ts`.

## Key Workflows
- **Install dependencies:** `npm install`
- **Install Playwright browsers:** `npx playwright install` (or `npx playwright install --with-deps chromium`)
- **Configure environment:** Copy `.env.example` to `.env` and update values.
- **Run all tests:** `npm run test:all`
- **View Allure report:** Generated in `allure-report/` after test runs.

## Project Structure & Patterns
- **Test specs:** Top-level files like `test-1.spec.ts` and folders like `tests/` and `tests-examples/`.
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

## Examples
- To get all brands: `endPoints.getAllBrands`
- To edit a brand: `endPoints.editBrand(brandID)`
- To get customer login page: `endPoints.customerLoginPage`
- To check if a feature is covered: see `feature-map/e2e-feature-map.yml` under the relevant page/role/feature.


## References
- See `README.md` for setup and test run instructions.
- See `utils/apiEndPoints.ts` for all API endpoint patterns and usage.
- See `feature-map/e2e-feature-map.yml` for the full feature coverage matrix and to plan new tests.

---
If you are unsure about a workflow or endpoint, check the referenced files or ask for clarification.
