exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('ingredients')
		.truncate()
		.then(function() {
			// Inserts seed entries
			return knex('ingredients').insert([
				{ id: 1, ingredient_name: 'sugar', quantity: '3', measure: 'spoons' },
				{
					id: 2,
					ingredient_name: 'chocolate',
					quantity: '8',
					measure: 'spoons'
				},
				{ id: 3, ingredient_name: 'flour', quantity: '2', measure: 'spoons' }
			]);
		});
};
