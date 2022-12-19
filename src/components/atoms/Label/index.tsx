import React from 'react';

import { SLabel } from './styles';
import { LabelProps } from './types';

const Label: React.FC<LabelProps> = ({ label, ...rest }) => {
  return <SLabel {...rest}>{label}</SLabel>;
};

export default Label;
