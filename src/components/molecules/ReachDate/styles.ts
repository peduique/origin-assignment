import styled from 'styled-components';
import { theme } from '../../../globalStyles';
import Button from '../../atoms/Button';
import Typograph from '../../atoms/Typograph';

export const SContainer = styled.div``;

export const SFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #e9eef2;
  min-height: 56px;
  border-radius: 4px;
  padding: 3px 15px;

  &:focus-within {
    outline: 2px solid #1b30a8;
  }
`;

export const SButton = styled(Button)`
  border: 0;
  background: transparent;
  padding: 5px;
  color: #8a9ca9;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const SText = styled(Typograph)`
  margin: 0;
  font-size: 16px;
  line-height: 24px;
  color: #708797;
  text-align: center;

  ${({ $month }: { $month?: boolean }) =>
    $month &&
    `
    font-weight: 600;
    color: ${theme.colors.primary};
  `};
`;
