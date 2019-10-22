import { pullRequestAmount, otherReposAmount } from '../../pullRequestAmount';

const messages = [
  "It's not too late to start!",
  'Off to a great start, keep going!',
  'Off to a great start, keep going!',
  'Keep it up!',
  'Keep it up!',
  "Nice! Now, don't stop!",
  "Nice! Now, don't stop!",
  'So close!',
  'So close!',
  'Way to go!',
  "Now you're just showing off!"
];

/**
 * Get Messages Based on Pull Request and Other Repo count.
 *
 * @param {*} pullRequestCount
 * @param {*} otherReposCount
 * @returns
 */
const getMessage = (pullRequestCount, otherReposCount) => {
  const currentMonth = new Date().getMonth();

  if (currentMonth < 9) {
    return "Last year's result.";
  }

  if (currentMonth > 9) {
    return "This year's result.";
  }

  const isShowingOff = pullRequestCount > pullRequestAmount && otherReposCount > otherReposAmount;

  if (isShowingOff) {
    return messages[messages.length - 1];
  }

  return messages[pullRequestCount];
};

export default getMessage;
