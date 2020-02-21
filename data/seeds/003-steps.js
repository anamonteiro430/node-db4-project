exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('steps')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('steps').insert([
				{
					id: 1,
					step_number: '1',
					step_name: 'Join all ingredients',
					recipe_id: '1'
				},
				{ id: 2, step_number: '2', step_name: 'Bake cake', recipe_id: '1' },
				{ id: 3, step_number: '3', step_name: 'Devour cake', recipe_id: '1' }
			]);
		});
};
