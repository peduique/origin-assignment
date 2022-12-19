import { ReactNode } from 'react';

export interface ButtonProps {
  children: string | ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}
