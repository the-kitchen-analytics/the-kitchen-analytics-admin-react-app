import React from 'react';
import { ApplicationSettingsContextProvider } from '../../context/ApplicationSettingsContext';
import Router from '../Router';

export default function App() {
  return (
    <div className="App">
      <ApplicationSettingsContextProvider>
        <Router />
      </ApplicationSettingsContextProvider>
    </div>
  );
}
