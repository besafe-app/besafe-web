import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const ButtonDefault = ({
  value, onClick, color, size, backgroundColor, borderRadius, width,
}) => {
  const materialStyles = makeStyles({
    root: {
      color,
      backgroundColor,
      borderRadius,
      width,
    },
  })();

  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={onClick}
      classes={materialStyles}
      size={size}
      width={width}
    >
      {value}
    </Button>
  );
};

ButtonDefault.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.string,
  width: PropTypes.string.isRequired,
  size: PropTypes.string,
};


ButtonDefault.defaultProps = {
  color: '#FFFF',
  backgroundColor: '#E64C52',
  size: 'medium',
  borderRadius: '40px',
};
export default ButtonDefault;
