/**
 * Returns formatted date eg Wed Jul 28 1993.
 *
 * @param {string} dateTime
 * @returns {string} dateTime
 */
export function formatDate(dateTime) {
  const date = new Date(dateTime);

  return date.toDateString();
}

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
