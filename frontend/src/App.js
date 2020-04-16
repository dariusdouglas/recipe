import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import MainContainer from './containers/MainContainer';

function App() {
  return (
    <div className="RecipeApp">
      <BrowserRouter>
        <MainContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
