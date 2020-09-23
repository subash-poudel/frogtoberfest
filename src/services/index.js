import { getYear } from 'utils/date';
import { GITHUB_ORG_NAME } from 'config';

/**
 * Fetch and return responses from Github apis.
 *
 * @param {*} url
 * @param {*} githubToken
 * @returns {Promise}
 */
export function fetchInfoFromGitHub(url, githubToken) {
  const response = fetch(url, {
    headers: {
      Authorization: `token ${githubToken}`
    }
  })
    .then(response => response)
    .catch(error => error);

  return response;
}

/**
 * Returns array of api url.
 *
 * @param {string} username
 * @returns {Array<String>}
 */
export function getApiUrls(username) {
  const queryYear = getYear();

  return [
    `https://api.github.com/search/issues?q=author:${username}+is:pr+created:${queryYear}-10-01..${queryYear}-10-30`,
    `https://api.github.com/search/users?q=user:${username}`,
    `https://api.github.com/orgs/${GITHUB_ORG_NAME}/members/${username}`
  ];
}
