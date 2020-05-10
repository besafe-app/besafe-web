import styled from 'styled-components';
import { Radio } from 'components/core/Radio/Radio.style';
import iconCheck from 'assets/svg/icon-check.svg';

const Checkbox = styled(Radio)`
  display: inline-block;
  border-radius: 2px;
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

export default Checkbox;
