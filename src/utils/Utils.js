/**
 * Utility functions.
 */
const Utils = {
  // Returns formatted date, eg Wed Jul 28 1993.
  dateFormatter(dateTime) {
    const date = new Date(dateTime);

    return date.toDateString();
  },
  //Fetches from github apis.
  fetchInfoFromGitHub(url, GITHUB_TOKEN) {
    const response = fetch(url, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`
      }
    })
      .then(response => response)
      .catch(error => error);

    return response;
  }
};

export default Utils;
