import React from 'react';
import Welcome from './Welcome'
import Header from './Header'

export default ({ children }) => {

  return (<div> 
    <Header />
    {children}
  </div>);
} 
