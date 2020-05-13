import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import {
  Toolbar, Typography, Tooltip, IconButton,
} from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';

const TableToolbar = ({ count, title }) => {
  const classes = makeStyles((theme) => ({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
    },
    title: {
      fontWeight: 'bold',
      flex: '1 1 100%',
      color: 'rgba(0, 0, 0, 0.87)',
    },
  }))();

  return (
    <Toolbar className={classNames(classes.root)}>
      <Typography
        className={classes.title}
        variant="h5"
        id="tableTitle"
        component="div"
      >
        {title}
      </Typography>
      {count >= 0 && (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          Total de cidadãos:
          {' '}
          {count}
        </Typography>
      )}
      <Tooltip title="Filter list">
        <IconButton aria-label="filter list">
          <FilterListIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
};

TableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  title: PropTypes.string,
};

TableToolbar.defaultProps = {
  title: '',
};

export default TableToolbar;
