# Playwright End-to-End Automation Framework

A professional-grade, scalable E2E test automation framework built using **Playwright**, **TypeScript**, and integrated with **GitHub Actions** for continuous testing. This architecture is designed following enterprise engineering standards, featuring isolated execution runtime layers, structural maintainability, and clean CI/CD integration pipelines.

## 🚀 Key Architectural Features
*   **Continuous Integration (CI):** Fully automated regression test suites executed via GitHub Actions on every code push and Pull Request.
*   **Parallel Execution:** Configured for cloud-optimized, concurrent execution patterns across modern browser engines (Chromium, Firefox, WebKit).
*   **Artifact & Report Management:** Automatic archival of HTML test execution logs, step-by-step traces, and failure screenshots directly to cloud build storage.
*   **Clean Version Governance:** Strict adherence to professional agile branching strategies to maintain absolute stability on primary codebase tracks.

---

## 🛠️ Tech Stack & Dependencies
*   **Automation Engine:** Playwright (Web / API testing ecosystem)
*   **Language:** TypeScript / JavaScript (Node.js runtime environment)
*   **CI/CD Engine:** GitHub Actions (Ubuntu cloud virtualization containers)
*   **Reporting:** Playwright HTML Report / Artifact Archiver

---

## 📦 Local Installation & Setup

Ensure you have [Node.js](https://nodejs.org) and [Git](https://git-scm.com) installed on your machine before setup.

1. **Clone the Repository:**
   ```bash
   git clone https://github.com
   cd YOUR_REPO_NAME
   ```

2. **Install Node Modules:**
   Installs framework package dependencies cleanly using strict version locks:
   ```bash
   npm ci
   ```

3. **Install Headless Browsers:**
   Downloads target execution binaries along with their corresponding system dependencies:
   ```bash
   npx playwright install --with-deps
   ```

---

## 🧪 Running Tests Locally

*   **Execute All E2E Tests:**
    ```bash
    npx playwright test
    ```
*   **Run in Headed Mode (UI Visible):**
    ```bash
    npx playwright test --headed
    ```
*   **Launch Interactive UI Test Runner:**
    ```bash
    npx playwright test --ui
    ```
*   **Open the Local HTML Execution Report:**
    ```bash
    npx playwright show-report
    ```

---

## 🤖 CI/CD Infrastructure (GitHub Actions)

This framework features an integrated cloud pipeline orchestrated inside `.github/workflows/playwright.yml`. 

### The Workflow Pipeline Architecture:
1. **Trigger Phase:** Wakes up an isolated Linux virtual worker machine whenever changes target the `main` branch.
2. **Setup Phase:** Configures the Node.js runtime, installs pristine project dependencies via `npm ci`, and provisions headless system browser components.
3. **Execution Phase:** Runs the regression suite completely in the cloud.
4. **Publishing Phase:** Captures failure traces or screenshots, archiving them securely as downloadable artifacts for 30 days to facilitate fast debugging cycles.

---

## 🌿 Engineering Branching & PR Workflow

To ensure seamless team collaboration and codebase health, this repository strictly adheres to the **Feature Branching Strategy**:

*   `feature/feature-name` ➡️ Used for new E2E test suites or page coverage.
*   `fix/locator-name` ➡️ Used for swift selector modifications due to UI updates.
*   `chore/package-name` ➡️ Reserved for dependency updates and framework maintenance.

### The Development Lifecycle Flow:
1. Initialize local isolated playground tracks off `main` (`git checkout -b feature/your-task`).
2. Implement, debug, and locally certify script execution targets (`git commit -m "..."`).
3. Push to separate cloud tracks (`git push origin feature/your-task`) to isolate code risks.
4. Launch a transparent **Pull Request (PR)** where team leads provide structural feedback, and the GitHub Actions automation robot runs automated code-verification passes.
5. Fusing code into production tracks only occurs after both human approval and robot check marks turn **green**.
