exports.up = function (knex) {
  return knex.schema.createTable('user', (table) => {
    table.increments('id').primary();
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
    table.string('name');
    table.string('last_name');
    table.string('date_of_birth');
    table.timestamps(true, true).notNullable();
    table.boolean('game_master').notNullable().defaultTo(false);
    table.json('game_session');
    table.json('character_sheet');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('user');
};
