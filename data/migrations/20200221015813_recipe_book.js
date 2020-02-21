exports.up = function(knex) {
	return knex.schema

		.createTable('recipes', tbl => {
			tbl.increments();
			tbl.text('recipe_name', 128).notNullable();
		})

		.createTable('ingredients', tbl => {
			tbl.increments();
			tbl.text('ingredient_name', 128).notNullable();
			tbl.integer('quantity').notNullable();
			tbl.text('measure');
		})

		.createTable('steps', tbl => {
			// creates a primary key called id
			tbl.increments();

			tbl.integer('step_number').notNullable();

			tbl.text('step_name').notNullable();

			//FOREIGN KEY
			tbl
				.integer('recipe_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('recipes')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
		})

		.createTable('addRecipe', tbl => {
			//composite key
			tbl.primary(['id_recipe', 'id_ingredient']);
			//FOREIGN KEY
			tbl
				.integer('id_recipe')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('recipes')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
			//FOREIGN KEY
			tbl
				.integer('id_ingredient')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('ingredients')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
		});
};

exports.down = function(knex) {
	return knex.schema
		.dropTableIfExists('recipes')
		.dropTableIfExists('ingredients')
		.dropTableIfExists('steps')
		.dropTableIfExists('addRecipe');
};
