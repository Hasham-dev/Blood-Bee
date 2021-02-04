import { AuthProvider } from "./Resourse/Components/AuthProvider";
import Routes from "./Resourse/Pages/Routes";
import React from 'react';

const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};


export default App;
