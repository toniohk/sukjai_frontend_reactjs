import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, IconButton } from '@material-ui/core';

const BlackButton = withStyles({
  root: {
    color: '#FFFFFF',
    padding: '15px 22px',
    backgroundColor: '#1D1D1B',
    textTransform: 'inherit',
    '&:hover': {
      backgroundColor: '#1A1A1A',
    },
    '&:focus': {
      outline: 'none',
    },
    '& span': {
      fontSize: 16,
      fontWeight: 600,
    },
  },
})(Button);

const BlueButton = ({ large, children, ...other }) => {
  const RenderButton = withStyles({
    root: {
      color: '#ffffff',
      fontFamily: 'Poppins',
      fontSize: '16px',
      fontWeight: 600,
      padding: large ? '11px 35px 10px 36px' : '7px 35px 6px 36px',
      backgroundColor: '#4588ff',
      borderRadius: '6px',
      textTransform: 'inherit',
      whiteSpace: 'nowrap',
      '&:hover': {
        backgroundColor: '#437ee8',
      },
      '&:focus': {
        outline: 'none'
      },
      '&.Mui-disabled': {
        color: '#f0f0f0',
        backgroundColor: '#437ee8',
        opacity: 0.6,
      },
    },
  })(Button);

  return <RenderButton {...other}>{children}</RenderButton>;
};

const GrayButton = ({ large, children, ...other }) => {
  const RenderButton = withStyles({
    root: {
      color: '#2e2e2e',
      fontFamily: 'Poppins',
      fontSize: '16px',
      fontWeight: 600,
      padding: large ? '11px 35px 10px 36px' : '7px 35px 6px 36px',
      backgroundColor: '#eaebec',
      borderRadius: '6px',
      textTransform: 'inherit',
      whiteSpace: 'nowrap',
      '&:hover': {
        backgroundColor: '#d7d7d7',
      },
      '&:focus': {
        outline: 'none'
      },
      '&.Mui-disabled': {
        backgroundColor: '#d7d7d7',
        opacity: 0.6,
      },
    },
  })(Button);

  return <RenderButton {...other}>{children}</RenderButton>;
};

const ActionButton = withStyles({
  root: {
    '&:focus': {
      outline: 'none'
    }
  },
})(IconButton);


export { BlackButton, BlueButton, GrayButton, ActionButton };
