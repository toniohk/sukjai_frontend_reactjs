import React, { useState } from 'react';
import { Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { PasswordInput } from '../../../components/Inputs';
import { BlackButton } from '../../../components/Buttons';

import { resetPassword } from '../../../apis/auth';
import { useAppContext } from '../../../context/AppContext';

const useStyles = makeStyles(() => ({
  container: {
    height: '100%',
  },
}));

function ChangePassword() {
  const classes = useStyles();
  const { setLoading, setMessage } = useAppContext();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChange = () => {
    if (oldPassword === '' || newPassword === '' || confirmPassword === '') setMessage({ open: true, title: 'Error', description: 'Please input all fields' });
    else if (newPassword !== confirmPassword) setMessage({ open: true, title: 'Error', description: 'New password and confirm password do not match.' });
    else {
      setLoading(true);
      resetPassword(oldPassword, newPassword).then(() => {
        setMessage({ open: true, title: 'Success', description: 'Password changed successfully.' });
        setLoading(false);
      }).catch(err => {
        setMessage({ open: true, title: 'Error', description: err.data.message });
        setLoading(false);
      });
    }
  };

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Box display="flex" flexDirection="column" justifyContent="center" alignContent="center" height="100%">
        <Box>
          <PasswordInput
            label="Old Password"
            value={oldPassword}
            onChange={val => setOldPassword(val)}
          />
          <PasswordInput
            label="New Password"
            value={newPassword}
            onChange={val => setNewPassword(val)}
          />
          <PasswordInput
            label="Confirm new Password"
            value={confirmPassword}
            onChange={val => setConfirmPassword(val)}
            onKeyUp={e => e.keyCode === 13 && handleChange()}
          />
          <Box mt={4}>
            <BlackButton fullWidth onClick={() => handleChange()}>Change Password</BlackButton>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default ChangePassword;
