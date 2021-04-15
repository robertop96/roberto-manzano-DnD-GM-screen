exports.up = function (knex) {
  return knex.schema.createTable('user', (table) => {
    table.increments('id').primary();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.json('sessions');
    table.json('Sheets');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('user');
};
