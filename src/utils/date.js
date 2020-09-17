/**
 * Returns formatted date eg July 28, 1993.
 *
 * @param {string} dateTime
 * @returns {string}
 */
export function formatDate(dateTime) {
  const date = new Date(dateTime);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  return date.toLocaleDateString('en-US', options);
}

/**
 * Returns current year if month is greater than october else previous year.
 *
 * @returns {number}
 */
export function getYear() {
  const today = new Date();
  const currentMonth = today.getMonth();
  let year = today.getFullYear();

  if (currentMonth < 9) {
    year -= 1;
  }

  return year;
}
