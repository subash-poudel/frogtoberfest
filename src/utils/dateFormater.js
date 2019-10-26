/**
 * Format the given datetime timestamp to Date string.
 *
 * @param {string} dateTime
 * @returns {string}
 */
export function formatDate(dateTime) {
  const date = new Date(dateTime);

  return date.toDateString();
}