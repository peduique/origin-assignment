import { useState } from 'react';
import { getNextMonth } from '../utils/dateHelper';

interface UseDateProps {
  date: Date;
  handleMonthChange: (type: string) => void;
}

export const useDate = (): UseDateProps => {
  const [date, setDate] = useState(new Date());

  const handleMonthChange = (type: string) => {
    const nextMonth = getNextMonth(type, date);

    setDate(nextMonth);
  };

  return { date, handleMonthChange };
};
