import React, { useState, useEffect } from 'react';

const mockData = {
  recipes: [
    {
      name: 'Chicken Parm',
      slug: 'chicken_parm',
      image: 'https://s3-media0.fl.yelpcdn.com/bphoto/Rif9rZ9TMEhaYwyFEyE24A/o.jpg',
      ingredients: [
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
      ]
    },
    {
      name: 'Stir Fry',
      slug: 'stir_fry',
      image:
        'https://irepo.primecp.com/2014/10/199844/West-African-Chicken-Shrimp-Stir-Fry_Medium_ID-776771.jpg?v=776771',
      ingredients: [
        {
          id: 1,
          name: 'Chicken',
          quantity: '1lbs'
        },
        {
          id: 2,
          name: 'Brocolli',
          quantity: '.5lbs'
        }
      ]
    },
    {
      name: 'Stir Fry',
      slug: 'stir_fry',
      image:
        'https://irepo.primecp.com/2014/10/199844/West-African-Chicken-Shrimp-Stir-Fry_Medium_ID-776771.jpg?v=776771',
      ingredients: [
        {
          name: 'Chicken',
          quantity: '1lbs'
        },
        {
          name: 'Brocolli',
          quantity: '.5lbs'
        }
      ]
    },
    {
      name: 'Stir Fry',
      slug: 'stir_fry',
      image:
        'https://irepo.primecp.com/2014/10/199844/West-African-Chicken-Shrimp-Stir-Fry_Medium_ID-776771.jpg?v=776771',
      ingredients: [
        {
          id: 1,
          name: 'Chicken',
          quantity: '1lbs'
        },
        {
          id: 2,
          name: 'Brocolli',
          quantity: '.5lbs'
        }
      ]
    },
    {
      name: 'Stir Fry',
      slug: 'stir_fry',
      image:
        'https://irepo.primecp.com/2014/10/199844/West-African-Chicken-Shrimp-Stir-Fry_Medium_ID-776771.jpg?v=776771',
      ingredients: [
        {
          name: 'Chicken',
          quantity: '1lbs'
        },
        {
          name: 'Brocolli',
          quantity: '.5lbs'
        }
      ]
    },
    {
      name: 'Stir Fry',
      slug: 'stir_fry',
      image:
        'https://irepo.primecp.com/2014/10/199844/West-African-Chicken-Shrimp-Stir-Fry_Medium_ID-776771.jpg?v=776771',
      ingredients: [
        {
          name: 'Chicken',
          quantity: '1lbs'
        },
        {
          name: 'Brocolli',
          quantity: '.5lbs'
        }
      ]
    },
    {
      name: 'Stir Fry',
      slug: 'stir_fry',
      image:
        'https://irepo.primecp.com/2014/10/199844/West-African-Chicken-Shrimp-Stir-Fry_Medium_ID-776771.jpg?v=776771',
      ingredients: [
        {
          name: 'Chicken',
          quantity: '1lbs'
        },
        {
          name: 'Brocolli',
          quantity: '.5lbs'
        }
      ]
    },
    {
      name: 'Stir Fry',
      slug: 'stir_fry',
      image:
        'https://irepo.primecp.com/2014/10/199844/West-African-Chicken-Shrimp-Stir-Fry_Medium_ID-776771.jpg?v=776771',
      ingredients: [
        {
          name: 'Chicken',
          quantity: '1lbs'
        },
        {
          name: 'Brocolli',
          quantity: '.5lbs'
        }
      ]
    },
    {
      name: 'Stir Fry',
      slug: 'stir_fry',
      image:
        'https://irepo.primecp.com/2014/10/199844/West-African-Chicken-Shrimp-Stir-Fry_Medium_ID-776771.jpg?v=776771',
      ingredients: [
        {
          name: 'Chicken',
          quantity: '1lbs'
        },
        {
          name: 'Brocolli',
          quantity: '.5lbs'
        }
      ]
    }
  ]
};

// Create Context object
const RecipeContext = React.createContext();

// Provider "Provides" all data and states as props from topmost part of the react tree to inner components
const RecipeProvider = props => {
  // url to be used later in fetch
  // const url = '';

  // const setCurrentRecipe = recipe => {
  //   setRecipes({ ...state, currentRecipe: recipe });
  // };

  const updateCurrentRecipe = (id, value) => {
    const current = { ...currentRecipe };
    console.log(current.ingredients);
    if (current.ingredients) {
      const ingredientToUpdateIndex = current.ingredients.findIndex(
        ingredient => ingredient.id == id
      );
      current.ingredients[ingredientToUpdateIndex].name = value;
      console.log('in update current');
      console.log(current);
      setCurrentRecipe(current);
    }
  };

  const deleteCurrentIngredient = id => {
    console.log('id', id);
    console.log('in delete');
    const current = { ...currentRecipe };

    console.log('current', current.ingredients);
    if (current.ingredients) {
      const indexToDelete = current.ingredients.findIndex(ingredient => ingredient.id == id);

      current.ingredients.splice(indexToDelete, 1);
      console.log('current', current.ingredients);

      setCurrentRecipe(current);
    }
  };

  const [state, setRecipes] = useState([{ recipes: [] }]);
  const [currentRecipe, setCurrentRecipe] = useState({ currentRecipe: {} });

  const fetcheRecipes = async () => {
    // const response = await fetch(url);
    // const recipeData = response.json();
    const recipeData = mockData;

    setRecipes(recipeData);
  };

  useEffect(() => {
    fetcheRecipes();
  }, [currentRecipe]);

  return (
    <RecipeContext.Provider
      value={{
        state,
        currentRecipe,
        setCurrentRecipe,
        updateCurrentRecipe,
        deleteCurrentIngredient
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};

export { RecipeProvider, RecipeContext };
