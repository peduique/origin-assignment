import { getRawValue, getFormattedValue } from '../numberFormatHelper';

const rawValue = 24532.35;
const formattedValue = '24,532.35';

describe('numberFormatHelper', () => {
  it('should return formatted number', () => {
    const value = getFormattedValue(rawValue, { style: 'decimal' });

    expect(value).toBe(formattedValue);
  });

  it('should return raw value', () => {
    const value = getRawValue(formattedValue);

    expect(Number(value)).toBe(rawValue);
  });
});
