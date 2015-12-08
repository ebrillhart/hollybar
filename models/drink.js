var mongoose = require('mongoose');

var DrinkSchema = new mongoose.Schema({
  name: String,
  ingredients: [
  	{
  		ingredient: String,
  		amount: String,
  		alcohol: String
  	}
  ]
});

module.exports = mongoose.model('Drink', DrinkSchema);
