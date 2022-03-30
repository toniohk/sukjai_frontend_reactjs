import React, { useState } from 'react';
import { alpha, makeStyles, withStyles } from '@material-ui/core/styles';
import { InputBase, IconButton, FilledInput, InputLabel, FormHelperText, InputAdornment, FormControl } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    border: '1px solid #e2e2e1',
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#fcfcfb',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:hover': {
      backgroundColor: '#fff',
    },
    '&$focused': {
      backgroundColor: '#fff',
      boxShadow: `${alpha('#4588ff', 0.25)} 0 0 0 2px`,
      borderColor: '#4588ff',
    },
    '&.Mui-error': {
      boxShadow: `${alpha('#ec2425', 0.25)} 0 0 0 2px`,
      borderColor: '#ec2425',
    }
  },
  focused: {
    backgroundColor: '#fff',
    boxShadow: `${alpha('#4588ff', 0.25)} 0 0 0 2px`,
    borderColor: '#4588ff',
  }
}));

function PasswordInput({ label, helperText, value, onChange, ...other }) {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormControl style={{ width: '100%' }} variant="filled">
      <InputLabel {...other}>{label}</InputLabel>
      <FilledInput
        disableUnderline
        classes={classes}
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={e => onChange(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword(!showPassword)}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        {...other}
      />
      <FormHelperText {...other}>{helperText}</FormHelperText>
    </FormControl>
  );
}

const TextInput = withStyles({
  root: {
    width: '100%',
    height: '36px',
    padding: '6px 16px',
    borderRadius: '6px',
    border: 'solid 2px #f0f0f0',
    backgroundColor: '#ffffff',
    color: '#2e2e2e'
  },
})(InputBase);

const SelectInput = withStyles({
  root: {
    width: '100%',
    height: '36px',
    borderRadius: '6px',
    border: 'solid 2px #f0f0f0',
    backgroundColor: '#ffffff',
    color: '#2e2e2e'
  },
  input: {
    padding: '0 0 0 16px',
    height: '36px'
  }
})(InputBase);

export { PasswordInput, TextInput, SelectInput };
