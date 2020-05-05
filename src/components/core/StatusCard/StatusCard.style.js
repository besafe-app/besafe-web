import styled from 'styled-components';

import { ReactComponent as Avatar } from 'assets/svg/icon-user.svg';

export const CardWrapper = styled.div`
  background: #fff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 32px;
  }
`;

export const UserIcon = styled(Avatar)`
  margin-right: 20px;
  height: auto;
  width: 35px;
`;

export const Counter = styled.strong`
  font-size: 24px;
  font-weight: normal;
  text-align: center;
  color: #212121;
`;

export const Label = styled.span`
  color: #212121;
  font-size: 12px;
`;
