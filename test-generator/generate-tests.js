require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { fetchGitHubIssue } = require('./utils/github');
const { generateScenarioAndTests } = require('./utils/openai');

const [,, owner, repo, issueNumber, baseUrl] = process.argv;

async function run() {
  if (!owner || !repo || !issueNumber || !baseUrl) {
    console.error("Usage: node generate-tests.js <owner> <repo> <issueNumber> <baseUrl>");
    return;
  }

  const issue = await fetchGitHubIssue(owner, repo, issueNumber);
  const moduleName = issue.title.split("Acceptance Criteria - ")[1]?.trim().toLowerCase().replace(/\s+/g, '-');

  if (!moduleName) {
    console.error("Could not extract module name from issue title.");
    return;
  }

  const { scenarios, testScript } = await generateScenarioAndTests(issue.title, issue.body, baseUrl);

  // Write scenarios
  const scenarioPath = path.join(__dirname, `../playwright/scenario-txt/${moduleName}-test-scenarios.txt`);
  fs.writeFileSync(scenarioPath, scenarios.join('\n'), 'utf8');

  // Write test
  const testPath = path.join(__dirname, `../playwright/tests/${moduleName}.spec.js`);
  fs.writeFileSync(testPath, testScript, 'utf8');

  console.log(`✅ Test and scenario for ${moduleName} written.`);
}

run();
