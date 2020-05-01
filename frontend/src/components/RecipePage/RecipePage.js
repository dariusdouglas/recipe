import React, { useContext, useState } from 'react';
import { RecipeContext } from '../../context/index';
import IngredientList from '../IngredientList/IngredientList';
import './RecipePage.scss';
const RecipePage = () => {
  const context = useContext(RecipeContext);
  const appContext = context;
  let { currentRecipe } = appContext;

  if (!currentRecipe.ingredients) {
    const slug = window.location.href.split('/').pop();

    if (appContext.state.recipes) {
      currentRecipe = appContext.state.recipes.find(recipe => recipe.slug === slug);
    }
  }

  const { name, ingredients } = currentRecipe;

  const [newIngredientName, setNewIngredientName] = useState('');
  const [newIngredientQuantity, setNewIngredientQuantity] = useState('');
  const [showNewIngredientForm, toggleIngredientForm] = useState(false);

  const addIngredient = () => {
    appContext.addIngredient({ name: newIngredientName, quantity: newIngredientQuantity });
    setNewIngredientName('');
    setNewIngredientQuantity('');
    toggleIngredientForm(false);
  };

  const handleNameChange = e => {
    setNewIngredientName(e.target.value);
  };

  const handleQuantityChange = e => {
    setNewIngredientQuantity(e.target.value);
  };

  const inputField = (
    <div className="inputForm">
      <span className="input">
        <label>Name: </label>
        <input value={newIngredientName} onChange={handleNameChange} type="text" />
      </span>

      <span className="input">
        <label>Quantity: </label>
        <input value={newIngredientQuantity} onChange={handleQuantityChange} type="text" />
      </span>

      <button onClick={addIngredient}>Save</button>
    </div>
  );

  return (
    <div className="recipe-page">
      <div className="row">
        <h1 className="recipe-header">{name}</h1>
        <button className="addButton" onClick={() => toggleIngredientForm(true)}>
          +
        </button>
      </div>

      {showNewIngredientForm && inputField}
      {/* <h1 className="recipe-header">Chicken Parm</h1> */}

      {ingredients && ingredients.length > 0 ? (
        <IngredientList ingredients={ingredients} />
      ) : (
        <p className="noIngredients">
          No Ingredients <br /> Press the '+' Button to add more
        </p>
      )}
      {/* <IngredientList
        ingredients={[
          {
            id: 1,
            name: 'Chicken',
            quantity: '2lbs'
          },
          {
            id: 2,
            name: 'Parm',
            quantity: '10lbs'
          }
        ]}
      /> */}
    </div>
  );
};

export default RecipePage;
