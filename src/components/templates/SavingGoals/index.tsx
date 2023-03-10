import React, { ChangeEvent, useEffect, useRef, useState } from 'react';

import Summary from '../../organisms/SavingGoalsSummary';
import AmountField from '../../molecules/AmountField';
import ReachDate from '../../molecules/ReachDate';
import { ReactComponent as CurrencyIcon } from '../../../assets/icons/icon-currency.svg';
import { ReactComponent as BuyAHouse } from '../../../assets/icons/buy-a-house.svg';
import { useDate } from '../../../hooks/useDate';

import {
  SWrapper,
  STitle,
  SForm,
  SButton,
  SFormHeader,
  SFormHeaderTitle,
  SFormHeaderText,
  SFields,
} from './styles';
import useKeyPress from '../../../hooks/useKeyPress';

const SavingGoals: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [amount, setAmount] = useState<string | number>(25000);
  const { date, handleMonthChange } = useDate();

  useKeyPress({
    keys: ['ArrowLeft', 'ArrowRight'],
    callback: (ev: KeyboardEvent) => {
      if (ev.target !== inputRef.current) {
        handleMonthChange(ev.key === 'ArrowLeft' ? 'prev' : 'next');
      }
    },
  });

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <SWrapper>
      <STitle data-testid="greetings-container">
        Let&apos;s plan your <strong>saving goal.</strong>
      </STitle>

      <SForm>
        <SFormHeader>
          <BuyAHouse />
          <span>
            <SFormHeaderTitle>Buy a house</SFormHeaderTitle>
            <SFormHeaderText>Saving goal</SFormHeaderText>
          </span>
        </SFormHeader>

        <SFields>
          <AmountField
            ref={inputRef}
            label="Total amount"
            value={amount}
            placeholder="Amount"
            prefix={<CurrencyIcon />}
            onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
              setAmount(target.value)
            }
          />
          <ReachDate
            label="Reach goal by"
            date={date}
            onClickChangeDate={handleMonthChange}
          />
        </SFields>

        <Summary date={date} amount={amount} />

        <SButton>Confirm</SButton>
      </SForm>
    </SWrapper>
  );
};

export default SavingGoals;
