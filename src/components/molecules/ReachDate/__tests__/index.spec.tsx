import { fireEvent, render, waitFor } from '@testing-library/react';
import ReachDate from '..';
import { getFormattedDate, getNextMonth } from '../../../../utils/dateHelper';

const setup = {
  label: 'Reach goal by',
  date: new Date(),
  onClickChangeDate: jest.fn(),
};

describe('ReachDate', () => {
  it('should render successfully', () => {
    const { getByText } = render(<ReachDate {...setup} />);

    expect(getByText(setup.label)).toBeInTheDocument();
  });

  it('should change to next month', async () => {
    const { getByText, getByTestId } = render(<ReachDate {...setup} />);

    const { month, year } = getFormattedDate(setup.date);
    const nextMonthBTN = getByTestId('next-date');

    expect(getByText(month)).toBeInTheDocument();
    expect(getByText(year)).toBeInTheDocument();

    fireEvent.click(nextMonthBTN);

    expect(setup.onClickChangeDate).toHaveBeenCalledTimes(1);
    expect(setup.onClickChangeDate).toHaveBeenCalledWith('next');

    const nextMonthUpdated = getNextMonth('next', setup.date);
    const newSetup = { ...setup, date: nextMonthUpdated };
    render(<ReachDate {...newSetup} />);

    const { month: nextM, year: nextY } = getFormattedDate(nextMonthUpdated);

    await waitFor(() => expect(getByText(nextM)).toBeInTheDocument());
    expect(getByText(nextY)).toBeInTheDocument();
  });

  it('should not be able to change to prev month', () => {
    const { getByText, getByTestId } = render(<ReachDate {...setup} />);

    const { month } = getFormattedDate(setup.date);
    const prevMonthBTN = getByTestId('prev-date');

    expect(prevMonthBTN).toBeDisabled();
    expect(getByText(month)).toBeInTheDocument();
  });

  it('should change to prev month', async () => {
    const nextMonth = getNextMonth('next', setup.date);
    const newSetup = { ...setup, date: nextMonth };
    const { getByText, getByTestId } = render(<ReachDate {...newSetup} />);

    const { month, year } = getFormattedDate(nextMonth);
    const prevMonthBTN = getByTestId('prev-date');

    expect(getByText(month)).toBeInTheDocument();
    expect(getByText(year)).toBeInTheDocument();

    expect(prevMonthBTN).not.toBeDisabled();

    fireEvent.click(prevMonthBTN);

    expect(setup.onClickChangeDate).toHaveBeenCalledTimes(1);
    expect(setup.onClickChangeDate).toHaveBeenCalledWith('prev');

    render(<ReachDate {...setup} />);

    const { month: prevMonth, year: prevYear } = getFormattedDate(setup.date);

    await waitFor(() => expect(getByText(prevMonth)).toBeInTheDocument());
    expect(getByText(prevYear)).toBeInTheDocument();
  });
});
