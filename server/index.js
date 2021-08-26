const express = require('express');

const db = require('../db/index.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static('client/dist'));

app.get('/recipes', (req, res) => {
  db.findRecipesByIngredients(req.query.ingredients)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.post('/addRecipe', (req, res) => {
  db.addRecipe(req.body)
    .then(() => {
      res.status(201).send('success submit!');
    })
    .catch((err) => {
      console.log('writing data failed', err);
      res.status(400).send(err);
    });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
