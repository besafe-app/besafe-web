import React from 'react';
import PropTypes from 'prop-types';
import { RadioWrapper, Label, Input } from 'components/core/Radio/Radio.style';
import CheckboxStyle from './Checkbox.style';

const Checkbox = ({
  name, label, id, handleChange, value, checked,
}) => (
  <RadioWrapper>
    <Input
      type="checkbox"
      id={id}
      name={name}
      onChange={handleChange}
      value={value}
      checked={checked}
    />
    <Label htmlFor={id}>
      <CheckboxStyle />
      <span>{label}</span>
    </Label>
  </RadioWrapper>
);

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default Checkbox;
