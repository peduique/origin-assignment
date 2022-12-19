import styled from 'styled-components';
import { theme } from '../../../globalStyles';
import Typograph from '../../atoms/Typograph';

export const SContainer = styled.div`
  border: 1px solid #e9eef2;
  border-radius: 8px;
`;

export const SHeader = styled.div`
  color: ${theme.colors.primary};
  font-size: 20px;
  padding: 24px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 767px) {
    padding: 24px;
    font-size: 18px;
  }
`;

export const SContent = styled(Typograph)`
  background: #f4f8fa;
  padding: 24px 32px;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #1c1e1f;
  margin: 0;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  @media (max-width: 767px) {
    padding: 24px;
    text-align: center;
  }
`;

export const SPrice = styled(Typograph)`
  font-family: ${theme.font.rubik};
  font-weight: 500;
  font-size: 32px;
  color: #0079ff;
  margin: 0;

  @media (max-width: 767px) {
    font-size: 24px;
  }
`;
