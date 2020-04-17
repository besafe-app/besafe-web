import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, lighten } from '@material-ui/core/styles';
import classNames from 'classnames';
import {
  Toolbar,
} from '@material-ui/core';
import { HeaderItem } from './PageHeaderStyle';

const PageHeader = ({ title, textColor }) => {
  const classes = makeStyles((theme) => ({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
    },
    highlight:
      theme.palette.type === 'light'
        ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
        : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },

  }))();
  return (
    <Toolbar className={classNames(classes.root, classes.highlight)}>
      <HeaderItem>
        <h5 style={{ color: textColor }}>{title}</h5>
      </HeaderItem>
    </Toolbar>
  );
};
PageHeader.propTypes = {
  textColor: PropTypes.string,
  title: PropTypes.string,
};

PageHeader.defaultProps = {
  textColor: '#DA1F26',
  title: '',
};

export default PageHeader;
