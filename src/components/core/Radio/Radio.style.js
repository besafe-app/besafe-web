import styled from 'styled-components';

import iconCheck from 'assets/svg/icon-check.svg';

export const RadioWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Label = styled.label`
  color: #000000;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
`;

export const Radio = styled.span`
  display: inline-block;
  border-radius: 50%;
  border: 2px solid #cc3632;
  height: 15px;
  width: 15px;
  position: relative;
  transition: background-color 0.2s linear;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &::after {
    content: url(${iconCheck});
    height: 95%;
    width: 95%;
    opacity: 0;
    transition: opacity 0.2s;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Input = styled.input`
  display: none;

  &:checked + ${Label} > ${Radio} {
    background-color: #cc3632;

    &::after {
      opacity: 1;
    }
  }
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
