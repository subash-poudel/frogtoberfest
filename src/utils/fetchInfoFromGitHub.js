const fetchInfoFromGitHub = (url, GITHUB_TOKEN) => {
  const response = fetch(url, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`
    }
  })
    .then(response => response)
    .catch(error => error);

  return response;
};

export default fetchInfoFromGitHub;
