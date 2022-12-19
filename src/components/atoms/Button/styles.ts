import styled from 'styled-components';
import { theme } from '../../../globalStyles';

export const SButton = styled.button`
  background: ${theme.colors.secondary};
  border-radius: 32px;
  padding: 20px 50px;
  border: 0;
  color: #fff;
  font-weight: 600;
  font-size: 16px;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
