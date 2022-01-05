import useFirebase from "../hooks/useFirebase";
import React from "react";
import { createContext } from 'react';

export const ContextApi = createContext(null);

const ContextProvider = ({ children }) => {
  const authInfo = useFirebase();
  const data = {
    ...authInfo,
  };
  return (
    <ContextApi.Provider value={data}>
      {children}
    </ContextApi.Provider>
  );
};

export default ContextProvider;