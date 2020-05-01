const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find({});
    res.json(recipes);
  } catch (err) {
    res.json(err);
  }
});

router.post('/', async (req, res) => {
  const recipe = new Recipe({
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
  });

  res.json(recipe);
  recipe.save();
});

router.post('/delete', async (req, res) => {
  // delete based on recipe name and ingredient ID
  // find recipe with name and update by deleteing ingredient

  const filter = { name: req.body.name };
  const update = { ingredients: req.body.ingredients };

  try {
    const recipe = await Recipe.findOneAndUpdate(filter, update);

    recipe.save();

    res.json(recipe);
  } catch (err) {
    res.send(err);
  }
});

router.post('/edit', async (req, res) => {
  const filter = { name: req.body.name };
  const update = { ingredients: req.body.ingredients };

  try {
    const recipe = await Recipe.findOneAndUpdate(filter, update);
    recipe.save();
    res.json(recipe);
  } catch (err) {
    res.send(err);
  }
});

router.post('/add', async (req, res) => {
  const filter = { name: req.body.name };
  const update = { ingredients: req.body.ingredients };

  try {
    const recipe = await Recipe.findOneAndUpdate(filter, update);
    recipe.save();
    res.json(recipe);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
