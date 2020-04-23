import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RecipePage from '../components/RecipePage/RecipePage';
import RecipeGrid from '../components/RecipeGrid/RecipeGrid';

const MainContainer = () => {
  return (
    <div>
      <Switch>
        <Route path="/:name" component={RecipePage} />
        <Route path="/" component={RecipeGrid} exact />
      </Switch>
    </div>
  );
};

export default MainContainer;
