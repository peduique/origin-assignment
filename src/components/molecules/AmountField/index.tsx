import React, { forwardRef, ReactNode } from 'react';

import Label from '../../atoms/Label';

import { SContainer, SInput, SPrefixWrapper, SPrefix } from './styles';
import { AmountFieldProps, ConditionalPrefixWrapProps } from './types';

const AmountField = forwardRef<HTMLInputElement, AmountFieldProps>(
  ({ label = '', value, onChange, prefix, placeholder }, ref) => {
    return (
      <SContainer>
        <Label label={label} />
        <ConditionalPrefixWrap
          hasPrefix={Boolean(prefix)}
          wrapper={(children: ReactNode) => (
            <SPrefixWrapper>
              <SPrefix>{prefix}</SPrefix>
              {children}
            </SPrefixWrapper>
          )}
        >
          <SInput
            getInputRef={ref}
            type="text"
            value={value}
            onChange={onChange}
            thousandSeparator=","
            placeholder={placeholder}
            data-testid="amount"
          />
        </ConditionalPrefixWrap>
      </SContainer>
    );
  }
);

AmountField.displayName = 'AmountField';

export default AmountField;

const ConditionalPrefixWrap = ({
  hasPrefix,
  wrapper,
  children,
}: ConditionalPrefixWrapProps) => (hasPrefix ? wrapper(children) : children);
