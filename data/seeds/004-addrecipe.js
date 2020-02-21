exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('addRecipe')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('addRecipe').insert([
				{ id_recipe: 1, id_ingredient: 1 },
				{ id_recipe: 1, id_ingredient: 2 },
				{ id_recipe: 1, id_ingredient: 3 }
			]);
		});
};
