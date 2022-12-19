import React from 'react';
import Label from '../../atoms/Label';

import { ReactComponent as IconLeftArrow } from '../../../assets/icons/icon-arrow-left.svg';
import { ReactComponent as IconRightArrow } from '../../../assets/icons/icon-arrow-right.svg';

import { SContainer, SFieldWrapper, SButton, SText } from './styles';
import { getFormattedDate } from '../../../utils/dateHelper';
import { ReachDateProps } from './types';

const ReachDate: React.FC<ReachDateProps> = ({
  label = '',
  onClickChangeDate,
  date,
}) => {
  const { formatted: todayFormatted } = getFormattedDate(new Date());
  const { month, year, formatted } = getFormattedDate(date);

  return (
    <SContainer>
      <Label label={label} />
      <SFieldWrapper>
        <SButton
          onClick={() => onClickChangeDate('prev')}
          disabled={todayFormatted === formatted}
          data-testid="prev-date"
        >
          <IconLeftArrow />
        </SButton>
        <span>
          <SText $month>{month}</SText>
          <SText>{year}</SText>
        </span>
        <SButton
          onClick={() => onClickChangeDate('next')}
          data-testid="next-date"
        >
          <IconRightArrow />
        </SButton>
      </SFieldWrapper>
    </SContainer>
  );
};

export default ReachDate;
