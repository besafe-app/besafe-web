import styled, { css } from 'styled-components';
import iconDown from 'assets/svg/icon-down.svg';

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 50px;
  padding: 0 15px;
  position: relative;

  &::after {
    content: url(${iconDown});
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
  }
`;

export const Title = styled.h3`
  color: rgba(0, 0, 0, 0.5);
  font-size: 20px;
  font-weight: 500;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s linear 0.3s, opacity 0.3s linear;
  padding: 15px;
`;

const openContent = css`
  ${Content} {
    visibility: visible;
    opacity: 1;
    transition: visibility 0s linear 0s, opacity 0.3s linear;
  }
`;

export const CollapseWrapper = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  transition: max-height 0.3s linear;
  height: auto;
  max-height: ${({ isOpen }) => (isOpen ? '600px' : '50px')};

  &:not(:last-child) {
    margin-bottom: 32px;
  }

  ${({ isOpen }) => isOpen && openContent}
`;
