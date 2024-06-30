import React, { createContext, useContext } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children, value }) => {
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData는 DataProvider 내에서 사용되어야 합니다');
  }
  return context;
};

// 사용 방법
// import { useData } from '../context/DataContext';
// const { data, setApiUrl, apiConfig } = useData();
  