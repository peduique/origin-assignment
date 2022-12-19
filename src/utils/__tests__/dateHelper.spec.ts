import {
  getFormattedDate,
  getMonthsDifference,
  getNextMonth,
} from '../dateHelper';

const december2022 = new Date('December 1, 2022 10:00:00');
const november2023 = new Date('November 1, 2023 10:00:00');

describe('Date Helper', () => {
  it('should show next month successfully', () => {
    const nextMonth = getNextMonth('next', december2022);
    const { month } = getFormattedDate(nextMonth);

    expect(month).toBe('January');
  });

  it('should not be able to show prev month', () => {
    const nextMonth = getNextMonth('prev', december2022);
    const { month } = getFormattedDate(nextMonth);

    expect(month).not.toBe('November');
  });

  it('should get months difference', () => {
    const months = getMonthsDifference(
      new Date(december2022),
      new Date(november2023)
    );

    expect(months).toBe(11);
  });

  it('should get formatted date from getFormattedDate', () => {
    const { month, year, formatted } = getFormattedDate(new Date(november2023));

    expect(month).toBe('November');
    expect(year).toBe(2023);
    expect(formatted).toBe('November/2023');
  });
});
