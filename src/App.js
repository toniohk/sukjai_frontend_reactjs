import React from 'react';
import { CookiesProvider } from 'react-cookie';

import AppContextProvider from './context/AppContext';
import Views from './views';

function App() {
  return (
    <CookiesProvider>
      <AppContextProvider>
        <Views />
      </AppContextProvider>
    </CookiesProvider>
  );
}

export default App;
