import React, { useState } from 'react';
import { getNextMonth } from '../utils/dateHelper';

export const useDate = () => {
  const [date, setDate] = useState(new Date());

  const handleMonthChange = (type: string) => {
    const nextMonth = getNextMonth(type, date);

    setDate(nextMonth);
  };

  return { date, handleMonthChange };
};
