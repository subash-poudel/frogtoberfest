/**
 * Returns formatted date eg Wed Jul 28 1993.
 *
 * @param {date} dateTime
 * @returns {date}
 */
export function dateFormatter(dateTime) {
  const date = new Date(dateTime);

  return date.toDateString();
}

/**
 * Fetch and return responses from Github apis.
 *
 * @param {*} url
 * @param {*} GITHUB_TOKEN
 * @returns {Promise}
 */
export function fetchInfoFromGitHub(url, GITHUB_TOKEN) {
  const response = fetch(url, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`
    }
  })
    .then(response => response)
    .catch(error => error);

  return response;
}
