const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  prep_time: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  ingredients: [
    {
      id: Number,
      name: String,
      quantity: String
    }
  ]
});

module.exports = Recipe = mongoose.model('recipes', RecipeSchema);
