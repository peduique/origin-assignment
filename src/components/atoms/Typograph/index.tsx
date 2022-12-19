import React from 'react';

import { STypograph } from './styles';
import { TypographProps } from './types';

const Typograph: React.FC<TypographProps> = ({ children, ...rest }) => (
  <STypograph {...rest}>{children}</STypograph>
);

export default Typograph;
