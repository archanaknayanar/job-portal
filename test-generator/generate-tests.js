import 'dotenv/config';
import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { fetchGitHubIssue } from './utils/github.js';
import { generateScenariosAndTest } from './utils/openai.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


console.log("Is GH_TOKEN loaded:", !!process.env.GH_TOKEN);


// Get CircleCI environment variables
const branchName = process.env.CIRCLE_BRANCH || '';
const issueIdMatch = branchName.match(/(\d+)-.*test-gen/);

if (!issueIdMatch) {
  console.error('Branch name does not match required format (e.g., 123-test-gen).');
  process.exit(1);
}

const issueId = issueIdMatch[1];
const owner = 'your-org'; // ⬅️ Replace with actual GitHub org/user
const repo = 'your-repo'; // ⬅️ Replace with actual GitHub repo
const baseUrl = process.env.BASE_URL || 'https://fortuneindia-rpsg-web.qtstage.io/';

try {
  const issue = await fetchGitHubIssue(owner, repo, issueId);

  const title = issue.title; // Example: "Acceptance Criteria - Breaking News"
  const body = issue.body;

  const moduleMatch = title.match(/Acceptance Criteria\s*-\s*(.+)/i);
  const moduleName = moduleMatch ? moduleMatch[1].trim().toLowerCase().replace(/\s+/g, '-') : 'general';

  console.log(`Generating tests for module: ${moduleName}`);

  const { scenariosText, playwrightCode } = await generateScenariosAndTest(body, moduleName, baseUrl);

  const scenarioDir = path.join(__dirname, '../playwright/scenario-txt');
  const testDir = path.join(__dirname, '../playwright/tests');

  await fs.mkdir(scenarioDir, { recursive: true });
  await fs.mkdir(testDir, { recursive: true });

  await fs.writeFile(`${scenarioDir}/${moduleName}-test-scenarios.txt`, scenariosText);
  await fs.writeFile(`${testDir}/${moduleName}.spec.js`, playwrightCode);

  console.log('✅ Scenario and test files generated successfully.');

} catch (err) {
  console.error('❌ Error generating test files:', err.message);
  process.exit(1);
}
