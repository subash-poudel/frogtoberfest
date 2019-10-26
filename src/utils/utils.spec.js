import { formatDate } from './utils';

describe('formatDate', () => {
  const expectedDateString = 'Sat Oct 26 2019';

  it('should return formatted date for given date in "dd-mmm-yyyy hh:mm" format.', () => {
    const date = '26-OCT-2019 13:48';
    expect(formatDate(date)).toEqual(expectedDateString);
  });

  it('should return formatted date for given date in "dd-mmm-yy" format.', () => {
    const date = '26-OCT-19';
    expect(formatDate(date)).toEqual(expectedDateString);
  });

  it('should return formatted date for given date in "dd-mmm-yyyy" format.', () => {
    const date = '26-OCT-2019';
    expect(formatDate(date)).toEqual(expectedDateString);
  });

  it('should return formatted date for given date in common date format.', () => {
    const date = 'October 26, 2019 13:48:15';
    expect(formatDate(date)).toEqual(expectedDateString);
  });

  it('should return formatted date for given date in another common date format.', () => {
    const date = '2019-10-26T03:24:00';
    expect(formatDate(date)).toEqual(expectedDateString);
  });

  const date = 'October Invalid';

  it('should not format the invalid date.', () => {
    expect(formatDate(date)).not.toEqual(expectedDateString);
  });

  it('should respond with Invalid Date for invalid date.', () => {
    expect(formatDate(date)).toEqual('Invalid Date');
  });
});