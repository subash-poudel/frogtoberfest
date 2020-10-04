import getMessage, { messages } from './getMessage';
import { TOTAL_PR_COUNT, TOTAL_OTHER_PR_COUNT } from 'config';

describe('getMessage', () => {
  /* Initialize the required date objects before mocking them globally
     just makes writing the test cases a bit easier 
  */
  const mockDateOctober = new Date(2020, 9, 15);
  const mockDateBeforeOctober = new Date(2020, 8, 1);
  const mockDateAfterOctober = new Date(2020, 11, 1);

  const spy = jest.spyOn(global, 'Date');

  it('should throw error with message Parameters pullRequestCount and otherReposCount should be integers.. for invalid inputs', () => {
    const expectedErrorMessage = 'Parameters pullRequestCount and otherReposCount should be integers.';

    expect(() => getMessage(null, null)).toThrowError(expectedErrorMessage);
    expect(() => getMessage(-1, -1)).toThrowError(expectedErrorMessage);
  });

  it("should return message Last year's result. for the month before october with valid inputs.", () => {
    const expectedMessage = "Last year's result.";

    spy.mockImplementation(() => mockDateBeforeOctober);

    expect(getMessage(0, 0)).toEqual(expectedMessage);
  });

  it("should return message This year's result. for the month after october with valid inputs.", () => {
    const expectedMessage = "This year's result.";

    spy.mockImplementation(() => mockDateAfterOctober);

    expect(getMessage(0, 0)).toEqual(expectedMessage);
  });

  it("should return message It's not too late to start! for the month of october if user has not submitted any PR.", () => {
    const expectedMessage = "It's not too late to start!";

    spy.mockImplementation(() => mockDateOctober);

    expect(getMessage(0, 0)).toEqual(expectedMessage);
  });

  it("should return message Now you're just showing off! for the month of october if user has submitted total PR greater than TOTAL_PR_COUNT and other PR greater than TOTAL_OTHER_PR_COUNT", () => {
    const expectedMessage = "Now you're just showing off!";

    spy.mockImplementation(() => mockDateOctober);

    expect(getMessage(TOTAL_PR_COUNT + 1, TOTAL_OTHER_PR_COUNT + 1)).toEqual(expectedMessage);
  });

  it('should return message from messages array for if the user is not showing off', () => {
    spy.mockImplementation(() => mockDateOctober);

    const prCounts = messages.slice(0, messages.length - 1).map((_, i) => i);
    const results = prCounts.map(prCount => getMessage(prCount, 0));

    expect(results).toEqual(messages.slice(0, messages.length - 1));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
