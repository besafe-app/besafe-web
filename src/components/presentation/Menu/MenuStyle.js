/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogoIcon = styled.img`
  object-fit: contain;
  width: 50%;
  height: 72px;
  margin-left: 10px;
  margin-top: 0;
`;

export const TitleContainer = styled.div`
  position: relative;
  height: 20px;
  margin: 12px 16px 20px 16px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const UserNameContainer = styled.div`
  margin-left: 16px;
  span{
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.15px;
    color: rgba(0, 0, 0, 0.87);
  }
`;

const activeClassName = 'nav-item-active';

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  font-size: 14px;
  padding-left: 28px;
  font-weight: 500;
  line-height: 30px;
  cursor: pointer;

  &:hover{
    width: 100%;
    background-color: rgba(204, 54, 50, 0.1);
    color: #cc3632 !important;
    cursor: pointer;
  }

  &.${activeClassName} {
    width: 100%;
    background-color: rgba(204, 54, 50, 0.1);
    color: #cc3632 !important;
    cursor: pointer;
  }
`;
