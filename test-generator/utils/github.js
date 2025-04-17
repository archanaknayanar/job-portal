import axios from 'axios';

const token = process.env.GH_TOKEN;


console.log("GitHub Token present:", !!token);




export async function fetchGitHubIssue(owner, repo, issueNumber) {
  const token = process.env.GH_TOKEN;
  const url = `https://api.github.com/repos/${owner}/${repo}/issues/${issueNumber}`;
  console.log("URL:", url);

  const response = await axios.get(url, {
    headers: {
      Authorization: `token ${token}`,
      Accept: 'application/vnd.github.v3+json'
    }
  });

  return response.data;
}
