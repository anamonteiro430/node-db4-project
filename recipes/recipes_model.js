const db = require('./../data/dbconfig');

/* - `getRecipes()`: should return a list of all recipes in the database.
- `getShoppingList(recipe_id)`: should return a list of all ingredients and quantities for a given recipe
- `getInstructions(recipe_id)`:  */

//getRecipes
function getRecipes() {
	return db('recipes');
}

//recipes/1/ingredients
function getShoppingList(recipe_id) {
	return db('addRecipe as add')
		.join('ingredients as i', 'i.id', 'add.id_ingredient')
		.join('recipes as r', 'r.id', 'add.id_recipe')
		.select('r.id', 'i.ingredient_name', 'i.quantity', 'i.measure')
		.where('r.id', recipe_id);
}

function getInstructions(recipe_id) {
	return db('steps')
		.join('recipes', 'recipes.id', 'steps.recipe_id')
		.where('recipe_id', recipe_id);
}

module.exports = { getRecipes, getShoppingList, getInstructions };
