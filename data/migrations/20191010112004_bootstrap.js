exports.up = function(knex) {
  return knex.schema
    .createTable('pois', tbl => {
      tbl.increments();

      tbl.string('name', 255).notNullable();
    })
    .createTable('users', tbl => {
      tbl.increments();

      tbl.string('name', 255).notNullable();
    })
    .createTable('user_favorites', tbl => {
      tbl.increments();

      tbl.text('notes');

      // we need FK that references the PK on users
      tbl
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');

      tbl
        .integer('poi_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('pois')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');

      tbl.unique(['user_id', 'poi_id']);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('user_favorites')
    .dropTableIfExists('users')
    .dropTableIfExists('pois');
};
