import styled from 'styled-components';
import { theme } from '../../../globalStyles';

export const SLabel = styled.label`
  display: block;
  color: ${theme.colors.primary};
  margin-bottom: 10px;
  font-size: 14px;

  @media (max-width: 767px) {
    font-size: 12px;
  }
`;
