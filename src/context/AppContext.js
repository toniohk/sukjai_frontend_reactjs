import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ open: false });
  const [token, setToken] = useState(false);
  const [categories, setCategories] = useState([]);
  const [videos, setVideos] = useState([]);

  const getCategoryName = (category_id) => {
    return categories.find(category => category.id === category_id)?.title || ''
  };

  return <AppContext.Provider value={{ loading, setLoading, message, setMessage, token, setToken, categories, setCategories, videos, setVideos, getCategoryName }}>
    {children}
  </AppContext.Provider>;
};

AppContextProvider.propTypes = {
  children: PropTypes.object,
};

export default AppContextProvider;
export const useAppContext = () => useContext(AppContext);