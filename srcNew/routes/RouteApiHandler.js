import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import apiConfig from '../config/apiConfig';

const RouteApiHandler = ({ setApiUrl }) => {
  const location = useLocation();
  
  useEffect(() => {
    switch(location.pathname) {
      case '/':
        setApiUrl(apiConfig["cateAll"]);
        break;
      case '/follow':
        setApiUrl(apiConfig["cateFollow"]);
        break;
      case '/woman':
        setApiUrl(apiConfig["cateWoman"]);
        break;
      case '/men':
        setApiUrl(apiConfig["cateMen"]);
        break;
      default:
        setApiUrl(apiConfig["cateAll"]);
    }
  }, [location.pathname, setApiUrl]);
  
  return null;
};

export default RouteApiHandler;
