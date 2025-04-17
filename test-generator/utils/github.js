import axios from 'axios';

console.log("GitHub Token present:", !!token);
console.log("URL:", url);

const token = process.env.GH_TOKEN;


export async function fetchGitHubIssue(owner, repo, issueNumber) {
  const token = process.env.GH_TOKEN;
  const url = `https://api.github.com/repos/${owner}/${repo}/issues/${issueNumber}`;

  const response = await axios.get(url, {
    headers: {
      Authorization: `token ${token}`,
      Accept: 'application/vnd.github.v3+json'
    }
  });

  return response.data;
}
