import { render, fireEvent, waitFor } from '@testing-library/react';
import SavingGoals from '..';
import { getFormattedValue } from '../../../../utils/numberFormatHelper';

describe('Saving goals', () => {
  it('should render successfully', () => {
    const { getByText, getByTestId } = render(<SavingGoals />);

    expect(getByText(/Buy a house/i)).toBeInTheDocument();
    expect(getByTestId('amount')).toBeInTheDocument();
    expect(getByText(/Reach goal by/i)).toBeInTheDocument();
  });

  it('should be able to test saving goals form', async () => {
    const newValue = 25000;
    const clickTimes = 5;

    const { getByTestId, getByText } = render(<SavingGoals />);
    const input = getByTestId('amount');
    const nextDate = getByTestId('next-date');
    const amount = newValue / clickTimes;

    fireEvent.change(input, { target: { value: newValue } });
    [...Array(clickTimes)].forEach(() => fireEvent.click(nextDate));

    expect(input.value).toEqual(
      getFormattedValue(newValue, { style: 'decimal' })
    );
    await waitFor(() => expect(getByText(/May 2023/i)).toBeInTheDocument());
    expect(getByTestId('summary-amount')).toHaveTextContent(
      getFormattedValue(amount)
    );
  });
});
