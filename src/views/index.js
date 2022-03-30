import React, { useEffect, useCallback } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { withCookies } from 'react-cookie';

import { MessageDialog } from '../components/Dialogs';
import Loader from '../components/Loader';

import Header from './layouts/Header';
import Sidebar from './layouts/Sidebar';
import routes from '../routes';

import { getCategories } from '../apis/category'
import { useAppContext } from '../context/AppContext';

function Views(props) {
  const { cookies } = props;
  const { loading, setLoading, message, setMessage, setToken, setCategories } = useAppContext();

  const loadCategories = useCallback(() => {
    setLoading(true);
    getCategories().then(res => {
      setCategories(res);
      setLoading(false);
    }).catch(err => {
      setCategories([]);
      setMessage({ open: true, title: 'Error', description: 'Failed to load the categories.' });
      setLoading(false)
    });
  }, [setLoading, setMessage, setCategories]);

  useEffect(() => {
    cookies.get('token') && setToken(cookies.get('token'));
    loadCategories();
  }, [cookies, setToken, loadCategories]);

  return (
    <>
      <Router>
        <div id="main">
          <Header />
          <div id="wrapper">
            <Switch>
              {routes.map((prop, key) => (
                <Route
                  path={prop.path}
                  component={prop.component}
                  key={key}
                  {...prop}
                />
              ))}
            </Switch>
            <div className="share-wrapper">
              <div className="share-container fl-wrap isShare"></div>
            </div>
          </div>
          <Sidebar />
        </div>
      </Router>
      <MessageDialog
        open={message.open}
        title={message.title}
        description={message.description}
        onClose={(event, reason) => reason !== 'clickaway' && setMessage({ ...message, open: false })}
      />
      <Loader open={loading} />
    </>
  );
}

export default withCookies(Views);
