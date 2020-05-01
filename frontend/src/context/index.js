import React, { useState, useEffect } from 'react';

const mockData = {
  recipes: [
    {
      name: 'Chicken Parm',
      slug: 'chicken_parm',
      prep_time: '25 mins',
      category: 'Comfort',
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
      prep_time: '25 mins',
      category: 'Comfort',
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
      name: 'Deep Dish Pizza',
      slug: 'stir_fry',
      prep_time: '25 mins',
      category: 'Comfort',
      image: 'https://giordanos.com/wp-content/uploads/Hero-image_1210-v2.jpg',
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
      name: 'Psychedelic Salad Rolls',
      slug: 'stir_fry',
      prep_time: '25 mins',
      category: 'Comfort',
      image:
        'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBuPXid.img?h=832&w=1598&m=6&q=60&u=t&o=f&l=f',
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
      name: 'Beauty in a Bowl',
      slug: 'stir_fry',
      prep_time: '25 mins',
      category: 'Comfort',
      image:
        'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBuPZGo.img?h=832&w=1598&m=6&q=60&u=t&o=f&l=f',
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
      name: 'Taste the Rainbow',
      slug: 'stir_fry',
      prep_time: '25 mins',
      category: 'Comfort',
      image:
        'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBuQ21t.img?h=832&w=1598&m=6&q=60&u=t&o=f&l=f',
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
      name: 'Super Soup',
      slug: 'stir_fry',
      prep_time: '25 mins',
      category: 'Comfort',
      image:
        'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBuPnt8.img?h=832&w=1598&m=6&q=60&u=t&o=f&l=f',
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
      name: 'Starry-eyed dessert',
      slug: 'stir_fry',
      prep_time: '25 mins',
      category: 'Comfort',
      image:
        'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBuPlgL.img?h=832&w=1598&m=6&q=60&u=t&o=f&l=f',
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
      name: 'Cookie Cup',
      slug: 'stir_fry',
      prep_time: '25 mins',
      category: 'Comfort',
      image:
        'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBuQ1ZJ.img?h=832&w=1598&m=6&q=60&u=t&o=f&l=f',
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

  const updateCurrentRecipe = (name, value) => {
    const current = { ...currentRecipe };

    if (current.ingredients) {
      const ingredientToUpdateIndex = current.ingredients.findIndex(
        ingredient => ingredient.name === name
      );
      current.ingredients[ingredientToUpdateIndex].name = value;

      setCurrentRecipe(current);

      fetch('http://localhost:5000/edit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: current.name, ingredients: current.ingredients })
      })
        .then(response => response.json())
        .then(data => console.log('success', data))
        .catch(error => {
          console.log('Error', error);
        });
    }
  };

  const addIngredient = ingredients => {
    // recipe.ingredients.push()
    const current = { ...currentRecipe };
    current.ingredients.push(ingredients);

    setCurrentRecipe(current);

    fetch('http://localhost:5000/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: current.name, ingredients: current.ingredients })
    })
      .then(response => response.json())
      .then(data => console.log('success', data))
      .catch(error => {
        console.log('Error', error);
      });
  };

  const deleteCurrentIngredient = async name => {
    let current = { ...currentRecipe };

    if (current.ingredients) {
      const indexToDelete = current.ingredients.findIndex(ingredient => ingredient.name === name);

      current.ingredients.splice(indexToDelete, 1);

      setCurrentRecipe(current);

      fetch('http://localhost:5000/delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: current.name, ingredients: current.ingredients })
      })
        .then(response => response.json())
        .then(data => console.log('success', data))
        .catch(error => {
          console.log('Error', error);
        });
    }
  };

  const [state, setRecipes] = useState([{ recipes: [] }]);
  const [currentRecipe, setCurrentRecipe] = useState({ currentRecipe: {} });

  const fetcheRecipes = async () => {
    const response = await fetch('http://localhost:5000');
    const recipeData = await response.json();

    setRecipes({ recipes: recipeData });
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
        addIngredient,
        deleteCurrentIngredient
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};

export { RecipeProvider, RecipeContext };
