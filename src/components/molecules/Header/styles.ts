import styled from 'styled-components';

import { ReactComponent as Logo } from '../../../assets/logoOrigin.svg';

export const SHeader = styled.div`
  background: #fff;
  padding: 22px 55px;

  @media (max-width: 767px) {
    padding: 16px;
  }
`;

export const SLogo = styled(Logo)`
  @media (max-width: 767px) {
    width: 75px;
    height: 24px;
  }
`;
