const axios = require('axios');

async function generateScenarioAndTests(issueTitle, issueBody, baseUrl) {
  const prompt = `
You are an expert QA Automation engineer. Below is a GitHub issue title and its body containing acceptance criteria. Generate:
1. A list of clear human-readable test scenarios
2. A complete Playwright test script in JavaScript

Base URL: ${baseUrl}

Issue Title: ${issueTitle}

Issue Body:
${issueBody}

Return both as JSON:
{
  "scenarios": ["..."],
  "testScript": "..."
}
  `;

  const response = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'You generate test scenarios and Playwright tests.' },
        { role: 'user', content: prompt }
      ],
      temperature: 0.5
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    }
  );

  const json = JSON.parse(response.data.choices[0].message.content);
  return json;
}

module.exports = { generateScenarioAndTests };
