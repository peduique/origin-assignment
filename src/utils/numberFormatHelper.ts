export const getFormattedValue = (
  value: number,
  params: Intl.NumberFormatOptions = {}
): string => {
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 2,
    style: 'currency',
    currency: 'USD',
    ...params,
  }).format(Number(value));
};

export const getRawValue = (value: string): string => {
  return value.replace(/,/g, '');
};
