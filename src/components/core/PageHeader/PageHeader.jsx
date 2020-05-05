import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
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
  }))();
  return (
    <Toolbar className={classNames(classes.root)}>
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
  textColor: 'rgba(0, 0, 0, 0.87)',
  title: '',
};

export default PageHeader;
