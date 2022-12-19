import styled from 'styled-components';

import Typograph from '../../atoms/Typograph';
import Button from '../../atoms/Button';
import { theme } from '../../../globalStyles';

export const SWrapper = styled.div`
  width: 560px;
  margin: 50px auto;

  @media (max-width: 767px) {
    width: 100%;
    margin: 32px 0;
  }
`;

export const STitle = styled(Typograph)`
  color: ${theme.colors.secondary};
  font-size: 20px;
  margin-bottom: 24px;
  text-align: center;

  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

export const SForm = styled.form`
  background: #ffffff;
  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
  border-radius: 8px;
  padding: 40px;
  gap: 30px;
  display: grid;

  @media (max-width: 767px) {
    padding: 24px;
    gap: 24px;
  }
`;

export const SButton = styled(Button)`
  width: 70%;
  margin: 0 auto;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const SFormHeader = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const SFormHeaderTitle = styled(Typograph)`
  font-family: ${theme.font.rubik};
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  color: ${theme.colors.primary};
  margin: 0;

  @media (max-width: 767px) {
    font-size: 20px;
  }
`;

export const SFormHeaderText = styled(Typograph)`
  font-size: 16px;
  line-height: 29px;
  color: #708797;
  margin: 0;

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const SFields = styled.div`
  display: grid;
  grid-template-columns: 2fr 190px;
  gap: 16px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;
