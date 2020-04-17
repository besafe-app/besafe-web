import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const ButtonDefault = ({
  value, onClick, color, size, backgroundColor,
}) => {
  const materialStyles = makeStyles({
    root: {
      color,
      borderColor: color,
      backgroundColor,
    },
  })();

  return (
    <Button
      variant="outlined"
      onClick={onClick}
      classes={materialStyles}
      size={size}
      backgroundColor={backgroundColor}
    >
      {value}
    </Button>
  );
};

ButtonDefault.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
  backgroundColor: PropTypes.string,
};


ButtonDefault.defaultProps = {
  color: '#DA1F26',
  size: 'medium',
  backgroundColor: '',
};
export default ButtonDefault;
