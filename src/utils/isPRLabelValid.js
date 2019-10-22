import { FROGTOBERFEST_IGNORE_LABEL_LIST } from '../constant/frogtoberfestIgnoreLabels';

// Makes The Array case insensitive for checking
const labelIgnoreRegex = new RegExp(FROGTOBERFEST_IGNORE_LABEL_LIST.join('|'), 'i');

/**
 * Checks whether Pull request is valid against Frogtoberfest label list.
 *
 * @param {*} labels
 */
export default function isPRLabelValid(labels) {
  const result = labels.map(label => {
    // returns false if label has name in frogtoberfest label list
    return !labelIgnoreRegex.test(label.name);
  });

  return result.includes(false) ? false : true;
}
