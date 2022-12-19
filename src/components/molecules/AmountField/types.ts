import { ChangeEvent, ReactNode } from 'react';

export interface AmountFieldProps {
  label?: string;
  type?: string;
  id?: string;
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  prefix?: string | ReactNode;
  placeholder?: string;
}

export type ConditionalPrefixWrapProps = {
  children: React.ReactElement;
  hasPrefix: boolean;
  wrapper: (children: React.ReactElement) => JSX.Element;
};
