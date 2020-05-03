import React from 'react';
import PropTypes from 'prop-types';

import * as S from './Radio.style';

const Radio = ({
  name, label, id, handleChange, value, checked,
}) => (
  <S.RadioWrapper>
    <S.Input
      type="radio"
      id={id}
      name={name}
      onChange={handleChange}
      value={value}
      checked={checked}
    />
    <S.Label htmlFor={id}>
      <S.Radio />
      <span>{label}</span>
    </S.Label>
  </S.RadioWrapper>
);

Radio.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default Radio;
