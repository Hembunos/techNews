import React, { Children, useContext } from 'react';
import App from '../App';

const AppContext = React.createContext();

const AppProvider = ( { children }) => {
  return (
    <AppContext.Provider value={"rahul"}>
      {children}
    </AppContext.Provider>
  );
};

//global context custom hook

const useGlobalContext = () => {

  return useContext(AppContext)

}

export { AppContext, AppProvider, useGlobalContext};
