import React from 'react';

import { FlexColumn } from 'components/core/Grid';

import * as S from './StatusCard.style';

const StatusCard = () => (
  <S.CardWrapper>
    <S.UserIcon>Icon</S.UserIcon>
    <FlexColumn>
      <S.Counter>1039</S.Counter>
      <S.Label>Cidadãos</S.Label>
    </FlexColumn>
  </S.CardWrapper>
);

export default StatusCard;
