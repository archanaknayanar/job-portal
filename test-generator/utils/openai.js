import 'dotenv/config';
import axios from 'axios';

console.log("OpenAI API Key loaded:", !!process.env.OPENAI_API_KEY);



export async function generateScenariosAndTest(issueBody, moduleName, baseUrl) {
  const prompt = `
You are an expert QA automation engineer.

Below is the acceptance criteria for a feature called "${moduleName}":
${issueBody}

Your task is:
1. Generate 5-7 concise manual test scenarios in plain English.
2. Then generate a Playwright test file using JavaScript based on those scenarios.
3. The Playwright test must use the base URL: ${baseUrl}
4. Ensure tests are written in describe/it format using '@playwright/test' library.
5. Handle common selectors and interactions smartly.

Return only two sections:
---
SCENARIOS:
[List of test scenarios]

---
CODE:
[JavaScript code]
`;

  const apiKey = process.env.OPENAI_API_KEY;
  const orgId = process.env.OPENAI_ORG_ID;
  

  const response = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: 'gpt-4',
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.3
    },
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'OpenAI-Organization': orgId,
        'Content-Type': 'application/json'
      }
    }
  );

  const fullOutput = response.data.choices[0].message.content;

  // Parse the response
  const scenarioMatch = fullOutput.match(/---\s*SCENARIOS:\s*([\s\S]*?)\n---\s*CODE:/i);
  const codeMatch = fullOutput.match(/---\s*CODE:\s*([\s\S]*)/i);

  const scenariosText = scenarioMatch ? scenarioMatch[1].trim() : 'No scenarios found.';
  const playwrightCode = codeMatch ? codeMatch[1].trim() : '// No code generated';

  return {
    scenariosText,
    playwrightCode
  };
}
