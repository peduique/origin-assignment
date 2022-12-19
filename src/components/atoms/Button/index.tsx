import React from 'react';

import { SButton } from './styles';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  onClick,
  disabled = false,
  ...rest
}) => {
  return (
    <SButton type={type} onClick={onClick} disabled={disabled} {...rest}>
      {children}
    </SButton>
  );
};

export default Button;
