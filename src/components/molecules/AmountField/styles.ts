import styled from 'styled-components';
import { NumericFormat } from 'react-number-format';

export const SContainer = styled.div``;

export const SPrefixWrapper = styled.div`
  position: relative;
`;

export const SInput = styled(NumericFormat)`
  border: 1px solid #e9eef2;
  min-height: 56px;
  border-radius: 4px;
  padding: 10px;
  color: #4d6475;
  font-weight: 500;
  font-size: 24px;
  width: 100%;

  ${SPrefixWrapper} & {
    padding-left: 40px;
  }
`;

export const SPrefix = styled.span`
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
`;
