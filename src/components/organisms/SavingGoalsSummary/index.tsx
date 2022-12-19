import React from 'react';

import {
  getFormattedDate,
  getMonthsDifference,
} from '../../../utils/dateHelper';
import {
  getRawValue,
  getFormattedValue,
} from '../../../utils/numberFormatHelper';
import { SContainer, SHeader, SContent, SPrice } from './styles';
import { SummaryProps } from './types';

const SavingGoalsSummary: React.FC<SummaryProps> = ({ amount, date }) => {
  const { month, year } = getFormattedDate(date);
  const months = getMonthsDifference(new Date(), date) || 1;
  const rawAmount = getRawValue(amount.toString());
  const monthlyValue = Number(rawAmount) / months;

  return (
    <SContainer>
      <SHeader>
        Monthly amount
        <SPrice data-testid="summary-amount">
          {getFormattedValue(monthlyValue)}
        </SPrice>
      </SHeader>
      <SContent>
        You&apos;re planning <strong>{months} monthly deposits</strong> to reach
        your <strong>{getFormattedValue(Number(rawAmount))}</strong> goal by{' '}
        <strong>
          {month} {year}.
        </strong>
      </SContent>
    </SContainer>
  );
};

export default SavingGoalsSummary;
