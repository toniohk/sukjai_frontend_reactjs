import React, { useState } from 'react';
import { withCookies } from 'react-cookie';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { PasswordInput } from '../../components/Inputs';
import { BlackButton } from '../../components/Buttons';
import CustomTabs from '../../components/CustomTabs';
import Category from './admin/Category';
import Video from './admin/Video';
import ChangePassword from './admin/ChangePassword';

import { login } from '../../apis/auth';
import { useAppContext } from '../../context/AppContext';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
  },
}));

function Upload(props) {
  const classes = useStyles();
  const { cookies } = props;
  const { setLoading, setMessage, token, setToken } = useAppContext();
  const [password, setPassword] = useState('');
  const tabs = ["Category", "Video", "Change Password"];

  const handleLogin = () => {
    setLoading(true);
    login(password).then(res => {
      cookies.set('token', res.token);
      setToken(res.token);
      setLoading(false);
    }).catch(err => {
      setMessage({ open: true, title: 'Error', description: 'Failed to login.' });
      setLoading(false);
    });
  };

  return (
    <React.Fragment>
      <CssBaseline />
      {token ? (
        <Box p={4} height="100%">
          <CustomTabs items={tabs}>
            <Category />
            <Video />
            <ChangePassword />
          </CustomTabs>
        </Box>
      ) : (
        <Container maxWidth="sm" className={classes.container}>
          <Box display="flex" flexDirection="column" justifyContent="center" alignContent="center" height="100%">
            <Box>
              <PasswordInput
                label="Password"
                value={password}
                onChange={val => setPassword(val)}
                onKeyUp={e => e.keyCode === 13 && handleLogin()}
              />
              <Box mt={4}>
                <BlackButton fullWidth onClick={() => handleLogin()}>Login</BlackButton>
              </Box>
            </Box>
          </Box>
        </Container>
      )}
    </React.Fragment>
  );
}

export default withCookies(Upload);
