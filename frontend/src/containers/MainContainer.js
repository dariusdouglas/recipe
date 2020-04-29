import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RecipePage from '../components/RecipePage/RecipePage';
import RecipeGrid from '../components/RecipeGrid/RecipeGrid';
import NavBar from '../components/NavBar/NavBar';

const MainContainer = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/:name" component={RecipePage} />
        <Route path="/" component={RecipeGrid} exact />
      </Switch>
    </div>
  );
};

export default MainContainer;
