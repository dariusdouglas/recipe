import React from 'react';
import { Switch, Route } from 'react-router-dom';

import RecipeGrid from '../components/RecipeGrid/RecipeGrid';

const MainContainer = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={RecipeGrid} />
      </Switch>
    </div>
  );
};

export default MainContainer;
