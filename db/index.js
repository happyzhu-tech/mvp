const mongoose = require('mongoose');
const data = require('./data.js');

mongoose.connect('mongodb://localhost:27017/meal', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('successfully connect to database');
});

const recipeSchema = new mongoose.Schema({
  name: String,
  ingredients: [String],
  features: [String],
  cook_time: String,
  recipe_url: String,
  image_url: String,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

// load data into database
// Recipe.insertMany(data)
//   .then(() => {
//     console.log('all data saved');
//   })
//   .catch((err) => {
//     console.log('write data error', err);
//   });

// query
// { ingredients: { $size: ingredientArr.length, $all: ingredientArr } }
const findRecipesByIngredients = (ingredientArr) => {
  // console.log(ingredientStr, typeof ingredientStr);
  // const obj = ingredientStr.split()
  const len = ingredientArr.length;

  return Recipe.find({ ingredients: { $size: len, $all: ingredientArr } });
};

module.exports = {
  findRecipesByIngredients,
};
