export const getNextMonth = (type: string, date: Date): Date => {
  return type === 'prev' ? prevMonth(date) : nextMonth(date);
};

export const getMonthsDifference = (dateFrom: Date, dateTo: Date): number => {
  if (!isValidDate(dateFrom) || !isValidDate(dateTo)) return 0;

  return (
    dateTo.getMonth() -
    dateFrom.getMonth() +
    12 * (dateTo.getFullYear() - dateFrom.getFullYear())
  );
};

export const getFormattedDate = (
  date: Date
): { month: string; year: number; formatted: string } => {
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  const formatted = `${month}/${year}`;

  return { month, year, formatted };
};

const isValidDate = (date: Date): boolean => {
  return date instanceof Date && !isNaN(Number(date));
};

const nextMonth = (date: Date): Date => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 1);
};

const prevMonth = (date: Date): Date => {
  const { formatted: todayFormatted } = getFormattedDate(new Date());
  const { formatted } = getFormattedDate(date);

  if (todayFormatted === formatted) return new Date();

  return new Date(date.getFullYear(), date.getMonth() - 1, 1);
};
